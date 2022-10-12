import { withRouter } from "react-router";

function Footer({ location }) {
  const dark = location.pathname === "/projects/voucher-application-redesign";
  return (
    <div
      style={{
        background: dark ? "#f2f2f2" : "#2c2c2c",
        color: dark ? "#2c2c2c" : "#f2f2f2",
        fontSize: 20,
        padding: "32px 0",
        textAlign: "center",
      }}
    >
      © 2022 created by Genie Chang
    </div>
  );
}

export default withRouter(Footer);
