import { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";

export default function TodoBody() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSave = () => {
    if (newTodo !== "") {
      setTodoList([...todoList, { title: newTodo, status: "In progress" }]);
      setNewTodo("");
    }
  };

  const handleGetTasks = () => {
    console.log(todoList);
  };

  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  const handleFinish = (index) => {
    const newList = [...todoList];
    newList[index].status = "Finished";
    setTodoList(newList);
  };

  return (
    
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput
                      label="Enter a task here"
                      id="form1"
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn type="button" onClick={handleSave}>
                      Save
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn type="button" color="warning" onClick={handleGetTasks}>
                      Get tasks
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {todoList.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.title}</td>
                        <td>{item.status}</td>
                        <td>
                          <MDBBtn type="button" color="danger" onClick={() => handleDelete(index)}>
                            Delete
                          </MDBBtn>
                          {item.status !== "Finished" && (
                            <MDBBtn type="button" color="success" className="ms-1" onClick={() => handleFinish(index)}>
                              Finished
                            </MDBBtn>
                          )}
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
