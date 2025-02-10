#import { redirect } from "@remix-run/react";
#import { nanoid } from "nanoid";

#export const loader = () => {
  #const id = nanoid();
  #return redirect(`/${id}`);
#};

#export default function Index() {
  #return <div>'Whatever you put here will not be shown'</div>;
#}


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
        src="https://calendar.yandex.ru/embed/day?&amp
        layer_ids=27649881&amp
        tz_id=Europe/Moscow&amp
        layer_names=Расписание. 313 группа. ПСД"
        width="100%"
        height="450"
        frameborder="0"
        style="border: 1px solid #eee"
      ></iframe>

      
    </div>
  );
}
