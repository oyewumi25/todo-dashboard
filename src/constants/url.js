const base_url = "http://localhost:9001/";

const createUser = "user/create-user";
const getAllUserActif = "user/get-all-actif";
const getAllUserInactif = "user/get-all-inactif";
const getUser = "user/get-all";
const getOneUser = "user/get-one/";

const createTodo = "todo/create-todo";
const getAllTodo = "todo/get-all";
const getAllTodoAchieved = "todo/get-all-achieved";
const getAllTodonotAchieved = "todo/get-all-notAchieved";
const deleteTodo = "todo/delete-todo/";
const updateTodo = "todo/update-todo/";

const getAllAdminActif   = "admin/get-all-actif";
const getAllAdminInactif   = "admin/get-all-inactif";




export { base_url, createTodo, createUser, getUser,getOneUser,
     getAllTodo, deleteTodo, updateTodo,getAllTodoAchieved,
     getAllTodonotAchieved,getAllUserActif,
     getAllUserInactif,getAllAdminActif,getAllAdminInactif};