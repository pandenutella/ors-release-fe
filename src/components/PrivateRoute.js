import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                authenticated ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        ></Route>
    );
};

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
