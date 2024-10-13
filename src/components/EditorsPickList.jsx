import { EditorsPickItem } from "./EditorsPickItem";

export const EditorsPickList = ({ title, editorsPicks }) => {
  return (
    <>
      <h2 className="sidebar__title" aria-labelledby="editors-pick__list">
        {title}
      </h2>
      <ul id="editors-pick__list" className="editors-pick__list">
        {editorsPicks.map((pick) => (
          <EditorsPickItem key={pick.id} pick={pick} />
        ))}
      </ul>
    </>
  );
};
