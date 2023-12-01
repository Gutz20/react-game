import { useQuestionsStore } from "@/store/questions";
import { type Question as QuestionType } from "@/types/types";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;
  if (userSelectedAnswer == null) return "white";
  if (index !== correctAnswer && index !== userSelectedAnswer) return "white";
  if (index === correctAnswer) return "green";
  if (index === userSelectedAnswer) return "red";
  return "white";
};

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <div className="p-2 mt-4">
      <div className="bg-black w-fit rounded-xl px-4 py-2 border-2 mb-4">
        <span className="font-MarkerDisplay">{info.question}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 bg-indigo-700 p-12 rounded-xl">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          className="bg-white w-full text-black text-center font-LilitaOne rounded-xl py-2"
        >
          {info.code}
        </SyntaxHighlighter>
        <div className="w-full">
          <List disablePadding>
            {info.answers.map((answer, index) => (
              <ListItem key={index}>
                <ListItemButton
                  disabled={info.userSelectedAnswer != null}
                  onClick={createHandleClick(index)}
                  sx={{
                    backgroundColor: getBackgroundColor(info, index),
                    color: "black",
                    borderRadius: 5,
                  }}
                >
                  <ListItemText primary={answer} sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        </div>
    </div>
  );
};

export default Question;
