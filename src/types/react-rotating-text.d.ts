declare module "react-rotating-text" {
  export interface ReactRotatingTextProps {
    items: string[];
    className?: string;
  }
  const ReactRotatingText: React.FC<ReactRotatingTextProps>;
  export default ReactRotatingText;
}
