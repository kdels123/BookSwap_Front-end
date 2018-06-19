import React from 'react'
import { Link } from 'react-router-dom'


class Profile extends React.Component {



    render() {
        return (
            <div className="container w-75 p-3" id="loginLayout">
                <h1>Profile</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputUsername"
                                placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputEmail"
                                placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Address</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputVerifyPassword"
                                placeholder="Address"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">City</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputVerifyPassword"
                                placeholder="City"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">State</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputVerifyPassword"
                                placeholder="State"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button
                                type="button"
                                className="btn btn-primary btn-block">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Profile;
