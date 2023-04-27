import ReactMarkDown from "react-markdown";
import { PostContentContainer, StyledPostContent } from "./styles";

interface PostContentProps {
    body: string;
}

export function PostContent({ body }: PostContentProps) {
    const bodyPhrases = body.split("\r\n");
    const filteredBodyPhrases = bodyPhrases.filter(phrase => phrase !== "");

    let i = 0;

    return (
        <PostContentContainer>
            <StyledPostContent>

                <div>
                    {
                        filteredBodyPhrases.map((phrase) => {
                            return (
                                <>
                                    <ReactMarkDown>
                                        {phrase}
                                    </ReactMarkDown>
                                    <br />
                                </>
                            )
                        })
                    }
                </div>

            </StyledPostContent>
        </PostContentContainer>
    )
}