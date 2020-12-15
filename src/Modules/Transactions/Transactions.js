import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Table } from "antd";

const Transactions = () => {
  return <>Transactions</>;
};

const mapStateToProps = (state) => {
  return { transactions: state.transactions.transactions };
};

export default compose(
  firestoreConnect(() => ["transactions"]),
  connect(mapStateToProps)
)(Transactions);
