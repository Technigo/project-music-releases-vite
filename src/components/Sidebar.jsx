import { EditorsPickList } from "./EditorsPickList";

export const Sidebar = ({ title, editorsPicks }) => {
  return (
    <aside className="sidebar">
      <EditorsPickList title={title} editorsPicks={editorsPicks} />
    </aside>
  );
};
