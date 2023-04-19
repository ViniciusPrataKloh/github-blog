import { PostCode, PostContentContainer, StyledPostContent } from "./styles";

export function PostContent(){
    return(
        <PostContentContainer>
            <StyledPostContent>

                <div>
                    <span>
                    Programming languages all have built-in data structures, 
                    but these often differ from one language to another. 
                    This article attempts to list the built-in data structures 
                    available in JavaScript and what properties they have. 
                    These can be used to build other data structures. 
                    Wherever possible, comparisons with other languages are drawn. <br/><br/>
                    </span>
                    <a href="#">
                        Dynamic typing <br/>
                    </a>
                    <span>
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                    </span>
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