import { Link } from "react-router-dom";
import "./CSS/Login.css"
export const Login = () => {
  return (
    <div className="topSpacing">
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <form  method="POST">
          <div class="formbold-form-title">
            <h2 class="">SIGN IN</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p> */}
          </div>

          {/* <div class="formbold-input-flex">
            <div>
              <label htmlFor="firstname" class="formbold-form-label">
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                class="formbold-form-input"
              />
            </div>
            <div>
              <label htmlFor="lastname" class="formbold-form-label"> Last name </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                class="formbold-form-input"
              />
            </div>
          </div>

          <div class="formbold-input-flex">
            <div>
              <label htmlFor="email" class="formbold-form-label"> Email </label>
              <input
                type="email"
                name="email"
                id="email"
                class="formbold-form-input"
              />
            </div>
            <div>
              <label htmlFor="phone" class="formbold-form-label"> Phone number </label>
              <input
                type="text"
                name="phone"
                id="phone"
                class="formbold-form-input"
              />
            </div>
          </div> */}

          <div class="formbold-mb-3">
            {/* <label htmlFor="address" class="formbold-form-label">
              E-mail
            </label> */}
            <input placeholder="E-mail"
              type="email"
              name="address"
              id="address"
              class="formbold-form-input"
            />
          </div>

          <div class="formbold-mb-3">
            {/* <label htmlFor="address2" class="formbold-form-label">
              Password
            </label> */}
            <input type="password" class="formbold-form-input"   placeholder="Password"/>
            {/* <small>forget password?</small> */}
          </div>

          {/* <div class="formbold-input-flex">
            <div>
              <label htmlFor="state" class="formbold-form-label"> State/Prvince </label>
              <input
                type="text"
                name="state"
                id="state"
                class="formbold-form-input"
              />
            </div>
            <div>
              <label htmlFor="country" class="formbold-form-label"> Country </label>
              <input
                type="text"
                name="country"
                id="country"
                class="formbold-form-input"
              />
            </div>
          </div> */}

          {/* <div class="formbold-input-flex">
            <div>
              <label htmlFor="post" class="formbold-form-label"> Post/Zip code </label>
              <input
                type="text"
                name="post"
                id="post"
                class="formbold-form-input"
              />
            </div>
            <div>
              <label htmlFor="area" class="formbold-form-label"> Area Code </label>
              <input
                type="text"
                name="area"
                id="area"
                class="formbold-form-input"
              />
            </div>
          </div> */}

          {/* <div class="formbold-checkbox-wrapper">
            <label htmlFor="supportCheckbox" class="formbold-checkbox-label">
              <div class="formbold-relative">
                <input
                  type="checkbox"
                  id="supportCheckbox"
                  class="formbold-input-checkbox"
                />
                <div class="formbold-checkbox-inner">
                  <span class="formbold-opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      class="formbold-stroke-current"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        stroke-width="0.4"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              I agree to the defined
             
            </label>
          </div> */}  <div class="formbold-mb-3">
              <button class="formbold-btn">SIGN IN</button>
          </div>
        
<small className="redirect">New here ? <Link to="/signup">Create Account</Link></small>
        </form>
      </div>
    </div>
    </div>
  );
}
