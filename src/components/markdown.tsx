import ReactMarkdown from "react-markdown";

export function Markdown({ children }) {
  return (
    <div className="max-w-full prose lg:prose-xl prose-p:text-lg prose-p:text-justify prose-h1:text-center prose-h3:text-2xl prose-h3:font-bold prose-a:text-lg prose-a:text-blue-600 prose-a:underline">
      <ReactMarkdown
        components={{
          a: ({ children, ...props }) => {
            if (props.href?.includes("http")) {
              props.target = "_blank";
              props.rel = "noopener noreferrer";
            }
            return <a {...props}>{children}</a>;
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
