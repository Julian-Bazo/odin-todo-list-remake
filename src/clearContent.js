import { content } from "./displayTasks";

export default function clearContent() {
    while (content.firstChild){
        content.removeChild(content.lastChild);
    }
}