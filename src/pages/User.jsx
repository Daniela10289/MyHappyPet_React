import React from "react";
// import "@styles/Home.scss";

export default function User() {
    return (
        <div className="section-header col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
            <div className="card bg-primary shadow-soft border-light p-4">
                <div className="card-header text-center pb-0">
                    <h2 className="mb-0 h5">Create Account</h2>
                </div>
                <div className="card-body">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="exampleInputIcon999">Your email</label>
                            <div className="input-group mb-4">
                                <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-envelope"></span></span></div>
                                <input className="form-control" id="exampleInputIcon999" placeholder="example@company.com" type="text" aria-label="email adress"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword345">Password</label>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt"></span></span></div>
                                    <input className="form-control" id="exampleInputPassword345" placeholder="Password" type="password" aria-label="Password" required=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleConfirmPassword712">Confirm Password</label>
                                <div className="input-group">
                                    <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt"></span></span></div>
                                    <input className="form-control" id="exampleConfirmPassword712" placeholder="Confirm password" type="password" aria-label="Password" required="" />
                                </div>
                            </div>
                            <div className="form-check mb-4"><input className="form-check-input" type="checkbox" value="" id="defaultCheck634" /> <label className="form-check-label" htmlFor="defaultCheck634">I agree to the <a href="#">terms and conditions</a></label></div>
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                    </form>
                    <div className="mt-3 mb-4 text-center"><span className="font-weight-normal">or</span></div>
                    <div className="btn-wrapper my-4 text-center"><button className="btn btn-primary btn-pill btn-icon-only text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button"><span aria-hidden="true" className="fab fa-facebook-f"></span></button> <button className="btn btn-primary btn-pill btn-icon-only text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button"><span aria-hidden="true" className="fab fa-twitter"></span></button> <button className="btn btn-primary btn-pill btn-icon-only text-facebook" type="button" aria-label="github button" title="github button"><span aria-hidden="true" className="fab fa-github"></span></button></div>
                    <div className="d-block d-sm-flex justify-content-center align-items-center mt-4"><span className="font-weight-normal">Already have an account? <a href="#" className="font-weight-bold">Login here</a></span></div>
                </div>
            </div>
        </div>

    );
}
