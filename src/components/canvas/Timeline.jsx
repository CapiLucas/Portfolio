import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";

export default function CustomizedTimeline() {
  return (
    <div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="grey"
          >
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="timelineDiv">
              <h2 className="titleTimeline">Instituto Jose Manuel Estrada</h2>
              <p className="PTimeline">Finished </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="grey"
          >
            January 2023 - Today
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <div className="timelineDiv">
              <h2 className="titleTimeline">CoderHouse Course</h2>
              <div>
                <ul>
                  <li>● Web Development</li>
                  <li>● Javascript</li>
                  <li>● React JS</li>
                  <li>
                    ● Backend <span>(</span>In progress<span>)</span>
                  </li>
                </ul>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
