import styles from "./Banner.module.css";
import Marquee from "react-fast-marquee";
import angularimg from "../../images/angular.png";
import reactimg from "../../images/react.png";
import springbootimg from "../../images/spring-boot.png";
import gitimg from "../../images/git.png";
import javaimg from "../../images/java.png";
import jenkinsimg from "../../images/jenkins.png";
import mysqlimg from "../../images/MySQL.png";
import mavenimg from "../../images/maven.png";
import pwa from "../../images/pwa.png";
import oracle from "../../images/oracle.png";
import rest from "../../images/restapi.png";

const Head = () => {
  return (
    // <div className={styles.head} >
    <Marquee
      className={styles.marquee}
      gradientColor={[3, 112, 45]}
      speed={390}
      pauseOnClick={true}
    >
      <img src={angularimg} alt="Angular" height="300" width="300" />
      <img src={reactimg} alt="React" height="300" width="500" />
      <img src={springbootimg} alt="Spring Boot" height="300" width="600" />
      <img src={gitimg} alt="GitHub" height="300" width="300" />
      <img src={javaimg} alt="Java" height="300" width="500" />
      <img src={jenkinsimg} alt="Jenkins" height="300" width="200" />
      <img src={mysqlimg} alt="My SQL" height="300" width="300" />
      <img src={oracle} alt="Oracle" height="300" width="300" />
      <img src={mavenimg} alt="Maven" height="100" width="400" />
      <img src={pwa} alt="PWA" height="200" width="400" />
      <img src={rest} alt="Rest API" height="300" width="350" />
    </Marquee>
    // </div>
  );
};

export default Head;
