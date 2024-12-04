import "./marks.css";
const Marks = ({name , roll , m1 , m2}) => {
    return (
        <div id="di">
        <h1>Marksheet</h1>
        <h2>Name : {name}</h2>
        <h2>Roll No:{roll}</h2>
        <h2>Sem 1:{m1}</h2>
        <h2>Sem 2 :{m2}</h2>

        </div>
    );
};
export default Marks ;