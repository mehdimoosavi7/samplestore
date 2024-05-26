import React from "react";
import { Container, Row } from "react-bootstrap";
import Title from "../frequents/Title";
import CaptionBox from "../frequents/CaptionBox";
import WorkFlowItem from "../frequents/WorkFlowItem";

const WorkFlow = () => {
  const workFlowData = [
    {
      title: "GPRS Tracking",
      text: `Lorem ipsum dolor sit amet consec teturus added sicing elit. Itaqueus eum distin actio commodi sit amet deserunt sitdo.`,
    },
    {
      title: "Turn On Watch",
      text: `Lorem ipsum dolor sit amet consec teturus added sicing elit. Itaqueus eum distin actio commodi sit amet deserunt sitdo.`,
    },
    {
      title: "Sign In System",
      text: `Lorem ipsum dolor sit amet consec teturus added sicing elit. Itaqueus eum distin actio commodi sit amet deserunt sitdo.`,
    },
    {
      title: "Install An App",
      text: `Lorem ipsum dolor sit amet consec teturus added sicing elit. Itaqueus eum distin actio commodi sit amet deserunt sitdo.`,
    },
    {
      title: "Make Your Settings",
      text: `Lorem ipsum dolor sit amet consec teturus added sicing elit. Itaqueus eum distin actio commodi sit amet deserunt sitdo.`,
    },
    {
      title: "Start Running",
      text: `Lorem ipsum dolor sit amet consec teturus added sicing elit. Itaqueus eum distin actio commodi sit amet deserunt sitdo.`,
    },
  ];
  return (
    <section className="index-workflow">
      <Container>
        <Row>
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="index-workflow-textBox text-center mb-5">
              <Title title={"working process"} />
              <CaptionBox
                caption={`How It Works`}
                text={`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout`}
                textColor={"#fff"}
              />
            </div>
          </div>
        </Row>
        <Row className="justify-content-center">
          {workFlowData && workFlowData.map((workflow, index) => {
            return(
              <WorkFlowItem counter={`0${index+1}`} caption={workflow.title} text={workflow.text} />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default WorkFlow;
