from fastapi import FastAPI
import uvicorn


app = FastAPI()

students: list = [
    {"Student_ID": 1, "Name": "Jasper", "Age": 17, "Grade": "VI"},
    {"Student_ID": 2, "Name": "Katherine", "Age": 18, "Grade": "IV"},
    {"Student_ID": 3, "Name": "Jackson", "Age": 16, "Grade": "V"},
    {"Student_ID": 4, "Name": "Daniel", "Age": 18, "Grade": "VII"},
]

@app.get("/students")
def all_students():
    return students

@app.get("/students/{student_id}")
def specific_student(student_id):
    for student in students:
        if student['Student_ID'] == student_id:
            return student
    return {"Message": "Student Not Found"}

@app.post("/addstudent")
def add_student(student_id: int, name: str, age: int, grade: str):
    existing_ids = [record["Student_ID"] for record in students]
    if student_id in existing_ids:
        return {"Message": "Student ID already exist"}
    else:
        students.append({
        "Student_ID": student_id,
        "Name": name,
        "Age": age,
        "Grade": grade
    })

        return {"Message": "Student Added Successfully"}

@app.put("/updatestudent/{student_id}")
def update_student(student_id: int, name: str, age: int, grade: str):
    
    for student in students:
        if student["Student_ID"] == student_id:
            student["Name"] = name,
            student["Age"] = age,
            student["Grade"] = grade
            return {"Message": "Student Updated Successfully"}
        
        return {"Message": "Student Not Found"}
    
@app.delete("/deletestudent/{student_id}")
def update_student(student_id: int):
    
    for student in students:
        if student["Student_ID"] == student_id:
            students.remove(student)
            return {"Message": "Student Deleted Successfully"}
        
        return {"Message": "Student Not Found"}
    

def start():
    uvicorn.run("student_app.main:app", host="127.0.0.1", port=8080, reload=True)