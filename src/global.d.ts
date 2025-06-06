declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '__mocks__/*' {
  const value: unknown;
  export default value;
}

declare module 'assets/*' {
  const value: unknown;
  export default value;
} 