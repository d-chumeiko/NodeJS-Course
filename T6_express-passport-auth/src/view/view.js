const logoutBtn = '<a href="/logout">Logout</a>';
const loginBtn = '<a href="/auth">Login</a>';

const showGreetingMsg = (user) =>
  `<p>Welcome, ${user.displayName}!
  Email: ${user.emails[0].value}</p>`;

const showLoginMsg = () => `
<p>Not Logged In</p>
${loginBtn}
`;

const showAfterLoginMsg = (user) => `
${showGreetingMsg(user)}
${logoutBtn}
`;

module.exports = {
  showLoginMsg,
  showAfterLoginMsg,
};
