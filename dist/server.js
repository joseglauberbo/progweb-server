"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateBookController_1 = require("./controllers/CreateBookController");
const CreateCategoriesController_1 = require("./controllers/CreateCategoriesController");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const createBook = new CreateBookController_1.CreateBookController();
const createCategory = new CreateCategoriesController_1.CreateCategoriesController();
app.post('/books', createBook.handle);
app.post('/categories', createCategory.create);
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// // Simulation to db
// // let users = [
// //   { id: 1, name: 'João' },
// //   { id: 2, name: 'Maria' },
// //   { id: 3, name: 'José' }
// // ];
// // GET Route
// app.get('/api/users', (req: Request, res: Response) => {
//   const { limit } = req.query;
//   // Validation of limit param
//   const limitNumber = Number(limit);
//   if (isNaN(limitNumber) || limitNumber <= 0) {
//     return res.status(400).json({ error: 'limit parameter invalid' });
//   }
//   // Filter and sort users
//   const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
//   const limitedUsers = sortedUsers.slice(0, limitNumber);
//   res.send(limitedUsers);
// });
// // GET BY ID Route
// app.get('/api/users/:id', (req: Request, res: Response) => {
//   const userId = parseInt(req.params.id);
//   // Id Validation
//   if (isNaN(userId)) {
//     return res.status(400).json({ error: 'Invalid ID' });
//   }
//   // Search by id
//   const user = users.find(u => u.id === userId);
//   if (!user) {
//     return res.status(404).json({ error: 'User not found.' });
//   }
//   res.send(user);
// });
// // POST Route - Create new user
// app.post('/api/users', (req: Request, res: Response) => {
//   const { name } = req.body;
//   if (!name) {
//     return res.status(400).json({ error: 'Name is required' });
//   }
//   const newUser = {
//     id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
//     name
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });
// // PUT Route - Edit user by id
// app.put('/api/users/:id', (req: Request, res: Response) => {
//   const userId = parseInt(req.params.id);
//   const { name } = req.body;
//   if (isNaN(userId)) {
//     return res.status(400).json({ error: 'Invalid ID' });
//   }
//   if (!name) {
//     return res.status(400).json({ error: 'Name is required' });
//   }
//   const userIndex = users.findIndex(u => u.id === userId);
//   if (userIndex === -1) {
//     return res.status(404).json({ error: 'User not found.' });
//   }
//   users[userIndex].name = name;
//   res.json(users[userIndex]);
// });
// // DELETE Route - Delete user by id
// app.delete('/api/users/:id', (req: Request, res: Response) => {
//   const userId = parseInt(req.params.id);
//   if (isNaN(userId)) {
//     return res.status(400).json({ error: 'Invalid ID' });
//   }
//   const userIndex = users.findIndex(u => u.id === userId);
//   if (userIndex === -1) {
//     return res.status(404).json({ error: 'User not found.' });
//   }
//   users = users.filter(u => u.id !== userId);
//   res.status(204).send(); // 204 No Content
// });
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
