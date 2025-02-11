/*#import { redirect } from "@remix-run/react";
#import { nanoid } from "nanoid";

#export const loader = () => {
  #const id = nanoid();
  #return redirect(`/${id}`);
#};

#export default function Index() {
  #return <div>'Whatever you put here will not be shown'</div>;
#} */


import { useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  // Добавление новой задачи
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Очистка поля ввода
    }
  };

  return (
    <div>
      <h1>Общий список задач</h1>
      {/* Поле ввода новой задачи */}
      <input
        type="text"
        placeholder="Введите новую задачу"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={addTask}>Добавить</button>

      {/* Список задач */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      {/* Добавляем ваш iframe */}
     <iframe
      src="https://calendar.yandex.ru/embed/day?layer_ids=27649881&tz_id=Europe/Moscow&layer_names=Расписание.%20313%20группа.%20ПСД"
      width="80%"
      height="800"
      frameBorder="0"
      style={{ border: "1px solid #eee" }}
      title="Расписание группы"
    ></iframe>

      
      <script 
        src="https://forms.yandex.ru/_static/embed.js"
        ></script>
      <iframe src="https://forms.yandex.ru/cloud/67ab1ea750569031f0825c31/?iframe=1"
        frameborder="0"
        name="ya-form-67ab1ea750569031f0825c31"
        width="80%"
        ></iframe>

      
    </div>
  );
}
