import TypeWriterEffect from "typewriter-effect";
import styles from './section1.module.css';

export default function TypeWriter() {
  return (
    <TypeWriterEffect
      options={{ loop: true, wrapperClassName: styles.typewriter  }}
      onInit={(typewriter: any) => {
        typewriter
				.typeString("Data Analyst")
				.pauseFor(2000)
				.deleteAll()
				.typeString("Web/App Developer")
				.pauseFor(2000)
					.deleteAll()
					.typeString("UI Designer")
          .pauseFor(2000)
					.deleteAll()
					.typeString("Welcome!")
					.pauseFor(10000)
          .start();
      }}
    />
  );
}
