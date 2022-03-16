const AuthButton = (props: { isAuthenticated: boolean, onLogout: () => void, onLogin: () => void }) => {
  const { isAuthenticated } = props;

  if (isAuthenticated) {
    return <button className="btn-primary" onClick={props.onLogout}>Logout</button>
  } else {
    return <button className="btn-primary" onClick={props.onLogin}>Login</button>
  }
}

export default AuthButton;