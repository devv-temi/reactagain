function Job(props) {
  return (
    <div>
      <h3>Salary: {props.salary}</h3>
      <h3>Position: {props.position}</h3>
      <h3>Company: {props.company}</h3>
    </div>
  );
}

export default Job;



{/* <h2>Job List</h2>
      <Job salary={7000} position="senior dev" company="mit edu" />
      <Job salary={1000} position="junior dev" company="jj edu" />
      <Job salary={45000} position="acting senior dev" company="microsoft edu" /> */}