import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
<<<<<<< HEAD
<<<<<<< HEAD

  const {user, logoutUser} = useContext(AuthContext);

  return(
=======
  const { user, logoutUser } = useContext(AuthContext);
  return (
>>>>>>> 6bef62c (log out)
=======
  const { user, logoutUser } = useContext(AuthContext);

  return (
>>>>>>> origin/main
    <Navbar bg="dark" className="mb-4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">ChattApp</Link>
        </h2>
<<<<<<< HEAD
<<<<<<< HEAD
        {user && <span className="text-warning">Logged in as {user?.name}</span>}
=======
        {user && (
          <span className="text-warning">Logged in as {user?.name}</span>
        )}
>>>>>>> 6bef62c (log out)
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {
              user && (<>
<<<<<<< HEAD
              <Link onClick={() => logoutUser()}
               to="/login"
                className="link-light text-decoration-none">
                  Logout
                  </Link>
                  </>
            )}
            {!user && (<>
              <Link to="/login" className="link-light text-decoration-none">Login</Link>
              <Link to="/register" className="link-light text-decoration-none">Register</Link>
            </>) }
=======
                <Link
                  onClick={() => logoutUser()} to="/login"
                  className="link-light text-decoration-none"
                >
                  Logout
                </Link>
              </>
              )}

            {!user && (<>
              <Link to="/login" className="link-light text-decoration-none">
                Login
              </Link>
              <Link to="/register"
                className="link-light text-decoration-none"
              >
                Register
              </Link>
            </>
            )}
>>>>>>> 6bef62c (log out)
=======
        {user && (
          <span className="text-warning">Logged in as {user?.name}</span>
        )}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {user ? (
              <Link
                onClick={() => logoutUser()}
                to="/login"
                className="link-light text-decoration-none"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  Login
                </Link>
                <Link to="/register" className="link-light text-decoration-none">
                  Register
                </Link>
              </>
            )}
>>>>>>> origin/main
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
