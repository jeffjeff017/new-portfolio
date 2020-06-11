import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_avatar_male_man-512.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Junior Web Developer</h1>

              <hr />

              <p>HTML/CSS | React | JavaScript | jQuery | WordPress </p>

              <div className="social-links">
                {/*  LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*  Github */}
                <a
                  href="https://github.com/jeffjeff017"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/*  Youtube */}
                <a
                  href="https://www.youtube.com/watch?v=c-8ud5nZ2sk"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
                {/* WordPress */}
                <a
                  href="https://zh-tw.wordpress.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-wordpress" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
