import { PostCode, PostContentContainer, StyledPostContent } from "./styles";

interface PostContentProps{
    body: string;
}

export function PostContent({body}: PostContentProps){
    const bodyPhrases = body.split("\r\n");
    const filteredBodyPhrases = bodyPhrases.filter(phrase => phrase !== "");

    return(
        <PostContentContainer>
            <StyledPostContent>

                <div>
                    {filteredBodyPhrases.map((phrase) => {
                        return (
                            <span>
                                {phrase} <br/> <br/>
                            </span>
                        )
                    })}
                </div>

                <PostCode>
                    <pre>
                        let foo = 42;   // foo is now a number
                    </pre>
                    <pre>
                        foo = 'bar';    // foo is now a string
                    </pre>
                    <pre>
                        foo = true;     // foo is now a boolean
                    </pre>
                </PostCode>

            </StyledPostContent>
        </PostContentContainer>
    )
}