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
import Image from '../Image/Image';

const Head = () => {
  return (
    <Marquee
      className={styles.marquee}
      gradient={false}
      // gradientColor={[3, 112, 45]}
      speed={290}
      pauseOnClick={true}
    >
      <Image src={angularimg} alt="Angular"/>
      <Image src={reactimg} alt="React"/>
      <Image src={springbootimg} alt="Spring Boot"/>
      <Image src={gitimg} alt="GitHub"/>
      <Image src={javaimg} alt="Java"/>
      <Image src={jenkinsimg} alt="Jenkins"/>
      <Image src={mysqlimg} alt="My SQL"/>
      <Image src={oracle} alt="Oracle"/>
      <Image src={pwa} alt="PWA"/>
      <Image src={rest} alt="Rest API"/>
      <Image src={mavenimg} alt="Maven" height='100px'/>
    </Marquee>
  );
};

export default Head;
