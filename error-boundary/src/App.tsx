import React from "react";
import "./App.css";

/**
 * components that catch JS errors anywhere in the child component tree, log those errors
 * and display a fallback UI instead
 */
//static getDerivedStateFromError(error)
//componentDidCatch(error, info)

class MyApp extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false } as any;
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //logToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <div>test</div>;
  }
}
