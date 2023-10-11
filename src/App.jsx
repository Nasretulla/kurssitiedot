const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{props.kurssi.name}</h1>
    </header>
  );
};

const Part = (props) => {
  console.log("TÄMÄ ON PART", props);
  return (
    <>
      <p>
        Kurssilla {props.osa} on {props.tehtavat} harjoitusta.
      </p>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part
        osa={props.kurssi.parts[0].name}
        tehtavat={props.kurssi.parts[0].exercises}
      />
      <Part
        osa={props.kurssi.parts[1].name}
        tehtavat={props.kurssi.parts[1].exercises}
      />
      <Part
        osa={props.kurssi.parts[2].name}
        tehtavat={props.kurssi.parts[2].exercises}
      />
    </>
  );
};
const Total = (props) => {
  console.log(props);
  const summa =
    props.kurssi.parts[0].exercises +
    props.kurssi.parts[1].exercises +
    props.kurssi.parts[2].exercises;

  return <p>Kurssilla on yhteensä {summa} harjoitusta.</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header kurssi={course} />
      <Content kurssi={course} />
      <Total kurssi={course} />
    </>
  );
};

export default App;
