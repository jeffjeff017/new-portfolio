import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div className="">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_avatar_male_man-512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Jeff Chan</h2>
            <h4 style={{ color: "grey" }}>Junior Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Kwai Chung Estate Ngai Kwai House 33/F 17 Room</p>
            <h5>Phone</h5>
            <p>+852 6332 0765</p>
            <h5>Email</h5>
            <p>fonglongchan1018@gmail.com</p>
            <h5>Web</h5>
            <p>Coming Soon...</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2017}
              schoolName="HKDI"
              schoolDescription="Creative Media"
            />

            <Education
              startYear={2013}
              endYear={2014}
              schoolName="IVE"
              schoolDescription="Multi Media "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2019}
              jobName="KUBRICK"
              jobDescription="Barista"
            />

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Web Developer"
              jobDescription="Frontend"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={55} />
            <Skills skill="jQuery" progress={55} />
            <Skills skill="WordPress" progress={65} />
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="React" progress={65} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
