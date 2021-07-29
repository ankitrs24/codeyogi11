import { FC, memo } from "react";
import { useParams } from "react-router-dom";

interface Props {}

interface RouteParent {
  LectureNumber:string;
  batchNumber:string;
}

const Lecture: FC<Props> = (props) => {
  const { LectureNumber, batchNumber } = useParams<RouteParent>();

  return (
    <div>
      Showing data of lecture # {LectureNumber} of batch # {batchNumber}
    </div>
  );
};

Lecture.defaultProps = {};

export default memo(Lecture);
