import React from "react";
import "../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Settings</h2>

        <div className="settings__top">
          <button className="settings__btn">My Details</button>
          <button className="settings__btn active__btn">Profile</button>
          <button className="settings__btn">Password</button>
          <button className="settings__btn">Email</button>
          <button className="settings__btn">Notification</button>
        </div>

        <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className="profile__decs">
            Update your photo and personal details here
          </p>
          <form action="">
            <div className="form__group">
              <div>
                <label htmlFor="">Live in</label>
                <input type="text" placeholder="Sylhet, Bangladesh" />
              </div>

              <div>
                <label htmlFor="">Street</label>
                <input type="text" placeholder="SYL 3180" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>

              <div>
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="+880 120****" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="">Date of Birth</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

              <div>
                <label htmlFor="">Gender</label>
                <input type="text" placeholder="Male/Female" />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label htmlFor="">Your Photo</label>
                <p className="profile-img__desc">
                  This will be displayed in your profile
                </p>
                <input type="file" placeholder="choose file" />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Delete</button>
                <button className="update__btn">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
