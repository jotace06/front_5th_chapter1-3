import { FC, createElement, ComponentType } from "react";

import * as JC_React from "../hooks/index";
import { shallowEquals } from "../equalities";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  const MemoComponent: FC<P> = (props: P) => {
    const prevPropsRef = JC_React.useRef<P | undefined>(undefined); // <Component /> 처럼 props 없이 사용해도 props는 빈 객체({})로 전달되기 때문에 undefined는 안전한 초기값으로 사용가능

    if (prevPropsRef.current === undefined) {
      prevPropsRef.current = props;
    }

    const equals = JC_React.useCallback(() => {
      const isEqual = _equals(prevPropsRef.current, props);
      if (!isEqual) prevPropsRef.current = props;
      return isEqual;
    }, [props]);

    const MemoizedComponent = JC_React.useMemo(
      () => createElement(Component, props),
      [props],
      equals,
    );

    return MemoizedComponent;
  };

  MemoComponent.displayName = `Memo(${getDisplayName(Component)})`;

  return MemoComponent;
}

// https://ko.legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
const getDisplayName = <P>(WrappedComponent: ComponentType<P>) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};
