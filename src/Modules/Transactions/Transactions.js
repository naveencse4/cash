import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Component } from "react";
import { Table } from "antd";

const { Column } = Table;

class Transactions extends Component {
  state = { selectedRowKeys: [] };
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };
  render() {
    const columns = [
      { title: "Id", dataIndex: "id" },
      { title: "Amount", dataIndex: "Amount" },
      { title: "Status", dataIndex: "Status" },
      {
        title: "Date",
        dataIndex: "Date",
        render: (record) => {
          return new Date(record.seconds * 1000).toLocaleString("en-IN");
        },
      },
    ];
    const { selectedRowKeys } = this.state;
    const rowSelection = { selectedRowKeys, onChange: this.onSelectChange };
    return (
      <>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props.transactions}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { transactions: state.firestore.ordered.transactions };
};

export default compose(
  firestoreConnect(() => ["transactions"]),
  connect(mapStateToProps)
)(Transactions);
