System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "components/register-litter.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "babel-runtime/helpers/to-consumable-array",
      "es6-promise",
      "react",
      "react-dom",
      "./form-base",
      "./payment-modal",
      "./uikit-form",
      "./input",
      "./dob-input",
      "moment",
      "./input-group"
    ],
    "components/payment-modal.js": [
      "react",
      "react-modal",
      "./uikit-form",
      "./input"
    ],
    "components/uikit-form.js": [
      "react"
    ],
    "components/dob-input.js": [
      "react"
    ],
    "npm:babel-runtime@5.8.38/helpers/get.js": [
      "../core-js/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.38/helpers/inherits.js": [
      "../core-js/object/create",
      "../core-js/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/helpers/create-class.js": [
      "../core-js/object/define-property"
    ],
    "npm:babel-runtime@5.8.38/helpers/extends.js": [
      "../core-js/object/assign"
    ],
    "npm:babel-runtime@5.8.38/helpers/to-consumable-array.js": [
      "../core-js/array/from"
    ],
    "npm:es6-promise@3.1.2.js": [
      "npm:es6-promise@3.1.2/dist/es6-promise.js"
    ],
    "npm:react@15.0.1.js": [
      "npm:react@15.0.1/react.js"
    ],
    "npm:react-dom@15.0.1.js": [
      "npm:react-dom@15.0.1/index.js"
    ],
    "components/form-base.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "react"
    ],
    "components/input.js": [
      "babel-runtime/helpers/get",
      "babel-runtime/helpers/inherits",
      "babel-runtime/helpers/create-class",
      "babel-runtime/helpers/class-call-check",
      "babel-runtime/helpers/extends",
      "react"
    ],
    "components/input-group.js": [
      "react"
    ],
    "npm:moment@2.12.0.js": [
      "npm:moment@2.12.0/moment.js"
    ],
    "npm:react-modal@1.1.1.js": [
      "npm:react-modal@1.1.1/lib/index"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js": [
      "core-js/library/fn/object/get-own-property-descriptor"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/create.js": [
      "core-js/library/fn/object/create"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js": [
      "core-js/library/fn/object/set-prototype-of"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/define-property.js": [
      "core-js/library/fn/object/define-property"
    ],
    "npm:babel-runtime@5.8.38/core-js/object/assign.js": [
      "core-js/library/fn/object/assign"
    ],
    "npm:babel-runtime@5.8.38/core-js/array/from.js": [
      "core-js/library/fn/array/from"
    ],
    "npm:es6-promise@3.1.2/dist/es6-promise.js": [
      "process"
    ],
    "npm:react@15.0.1/react.js": [
      "./lib/React"
    ],
    "npm:react-dom@15.0.1/index.js": [
      "react/lib/ReactDOM"
    ],
    "npm:react-modal@1.1.1/lib/index.js": [
      "./components/Modal"
    ],
    "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js": [
      "../../modules/$",
      "../../modules/es6.object.get-own-property-descriptor"
    ],
    "npm:core-js@1.2.6/library/fn/object/create.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js": [
      "../../modules/es6.object.set-prototype-of",
      "../../modules/$.core"
    ],
    "npm:core-js@1.2.6/library/fn/object/define-property.js": [
      "../../modules/$"
    ],
    "npm:core-js@1.2.6/library/fn/object/assign.js": [
      "../../modules/es6.object.assign",
      "../../modules/$.core"
    ],
    "npm:core-js@1.2.6/library/fn/array/from.js": [
      "../../modules/es6.string.iterator",
      "../../modules/es6.array.from",
      "../../modules/$.core"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:react@15.0.1/lib/React.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactComponent",
      "./ReactClass",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactElementValidator",
      "./ReactPropTypes",
      "./ReactVersion",
      "./onlyChild",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOM.js": [
      "./ReactDOMComponentTree",
      "./ReactDefaultInjection",
      "./ReactMount",
      "./ReactPerf",
      "./ReactReconciler",
      "./ReactUpdates",
      "./ReactVersion",
      "./findDOMNode",
      "./getNativeComponentFromComposite",
      "./renderSubtreeIntoContainer",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "process"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js": [
      "./$.export",
      "./$.set-proto"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js": [
      "./$.to-iobject",
      "./$.object-sap"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.assign.js": [
      "./$.export",
      "./$.object-assign"
    ],
    "npm:core-js@1.2.6/library/modules/es6.string.iterator.js": [
      "./$.string-at",
      "./$.iter-define"
    ],
    "npm:core-js@1.2.6/library/modules/es6.array.from.js": [
      "./$.ctx",
      "./$.export",
      "./$.to-object",
      "./$.iter-call",
      "./$.is-array-iter",
      "./$.to-length",
      "./core.get-iterator-method",
      "./$.iter-detect"
    ],
    "npm:react-modal@1.1.1/lib/components/Modal.js": [
      "react",
      "react-dom",
      "exenv",
      "./ModalPortal",
      "../helpers/ariaAppHider",
      "element-class",
      "lodash.assign",
      "process"
    ],
    "npm:object-assign@4.0.1.js": [
      "npm:object-assign@4.0.1/index"
    ],
    "npm:react@15.0.1/lib/getNativeComponentFromComposite.js": [
      "./ReactNodeTypes"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:fbjs@0.8.0/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactPerf.js": [
      "process"
    ],
    "npm:react@15.0.1/lib/ReactReconciler.js": [
      "./ReactRef",
      "./ReactInstrumentation",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@15.0.1/lib/ReactComponent.js": [
      "./ReactNoopUpdateQueue",
      "./ReactInstrumentation",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactClass.js": [
      "object-assign",
      "./ReactComponent",
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/keyMirror",
      "fbjs/lib/keyOf",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "fbjs/lib/mapObject",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactElement.js": [
      "object-assign",
      "./ReactCurrentOwner",
      "fbjs/lib/warning",
      "./canDefineProperty",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactElementValidator.js": [
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactCurrentOwner",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactPropTypes.js": [
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "fbjs/lib/emptyFunction",
      "./getIteratorFn"
    ],
    "npm:react@15.0.1/lib/onlyChild.js": [
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMComponentTree.js": [
      "./DOMProperty",
      "./ReactDOMComponentFlags",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDefaultInjection.js": [
      "./BeforeInputEventPlugin",
      "./ChangeEventPlugin",
      "./DefaultEventPluginOrder",
      "./EnterLeaveEventPlugin",
      "fbjs/lib/ExecutionEnvironment",
      "./HTMLDOMPropertyConfig",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMComponent",
      "./ReactDOMComponentTree",
      "./ReactDOMEmptyComponent",
      "./ReactDOMTreeTraversal",
      "./ReactDOMTextComponent",
      "./ReactDefaultBatchingStrategy",
      "./ReactEventListener",
      "./ReactInjection",
      "./ReactReconcileTransaction",
      "./SVGDOMPropertyConfig",
      "./SelectEventPlugin",
      "./SimpleEventPlugin",
      "./ReactDefaultPerf",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactMount.js": [
      "./DOMLazyTree",
      "./DOMProperty",
      "./ReactBrowserEventEmitter",
      "./ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactDOMContainerInfo",
      "./ReactDOMFeatureFlags",
      "./ReactElement",
      "./ReactFeatureFlags",
      "./ReactInstrumentation",
      "./ReactMarkupChecksum",
      "./ReactPerf",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "./setInnerHTML",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactUpdates.js": [
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactFeatureFlags",
      "./ReactPerf",
      "./ReactReconciler",
      "./Transaction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/findDOMNode.js": [
      "./ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactInstanceMap",
      "./getNativeComponentFromComposite",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/renderSubtreeIntoContainer.js": [
      "./ReactMount"
    ],
    "npm:exenv@1.2.0.js": [
      "npm:exenv@1.2.0/index.js"
    ],
    "npm:element-class@0.2.2.js": [
      "npm:element-class@0.2.2/index.js"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-proto.js": [
      "./$",
      "./$.is-object",
      "./$.an-object",
      "./$.ctx"
    ],
    "npm:core-js@1.2.6/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-iobject.js": [
      "./$.iobject",
      "./$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-assign.js": [
      "./$",
      "./$.to-object",
      "./$.iobject",
      "./$.fails"
    ],
    "npm:core-js@1.2.6/library/modules/$.string-at.js": [
      "./$.to-integer",
      "./$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-define.js": [
      "./$.library",
      "./$.export",
      "./$.redefine",
      "./$.hide",
      "./$.has",
      "./$.iterators",
      "./$.iter-create",
      "./$.set-to-string-tag",
      "./$",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx.js": [
      "./$.a-function"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-object.js": [
      "./$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.is-array-iter.js": [
      "./$.iterators",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-call.js": [
      "./$.an-object"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-length.js": [
      "./$.to-integer"
    ],
    "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js": [
      "./$.classof",
      "./$.wks",
      "./$.iterators",
      "./$.core"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-detect.js": [
      "./$.wks"
    ],
    "npm:lodash.assign@3.2.0.js": [
      "npm:lodash.assign@3.2.0/index"
    ],
    "npm:process@0.11.2.js": [
      "npm:process@0.11.2/browser.js"
    ],
    "npm:react@15.0.1/lib/ReactInstrumentation.js": [
      "./ReactDebugTool"
    ],
    "npm:react@15.0.1/lib/HTMLDOMPropertyConfig.js": [
      "./DOMProperty"
    ],
    "npm:react@15.0.1/lib/ReactInjection.js": [
      "./DOMProperty",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./ReactComponentEnvironment",
      "./ReactClass",
      "./ReactEmptyComponent",
      "./ReactBrowserEventEmitter",
      "./ReactNativeComponent",
      "./ReactPerf",
      "./ReactUpdates"
    ],
    "npm:react@15.0.1/lib/DOMLazyTree.js": [
      "./createMicrosoftUnsafeLocalFunction",
      "./setTextContent"
    ],
    "npm:react@15.0.1/lib/ReactMarkupChecksum.js": [
      "./adler32"
    ],
    "npm:react@15.0.1/lib/ReactDOMEmptyComponent.js": [
      "object-assign",
      "./DOMLazyTree",
      "./ReactDOMComponentTree"
    ],
    "npm:react@15.0.1/lib/ReactReconcileTransaction.js": [
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactBrowserEventEmitter",
      "./ReactInputSelection",
      "./Transaction"
    ],
    "npm:react-modal@1.1.1/lib/components/ModalPortal.js": [
      "react",
      "../helpers/focusManager",
      "../helpers/scopeTab",
      "lodash.assign"
    ],
    "npm:react@15.0.1/lib/ReactRef.js": [
      "./ReactOwner",
      "process"
    ],
    "npm:react@15.0.1/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:fbjs@0.8.0/lib/emptyObject.js": [
      "process"
    ],
    "npm:fbjs@0.8.0/lib/invariant.js": [
      "process"
    ],
    "npm:react@15.0.1/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:fbjs@0.8.0/lib/keyMirror.js": [
      "./invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactComponentBrowserEnvironment.js": [
      "./DOMChildrenOperations",
      "./ReactDOMIDOperations",
      "./ReactPerf",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactBrowserEventEmitter.js": [
      "object-assign",
      "./EventConstants",
      "./EventPluginRegistry",
      "./ReactEventEmitterMixin",
      "./ViewportMetrics",
      "./getVendorPrefixedEventName",
      "./isEventSupported",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMContainerInfo.js": [
      "./validateDOMNesting",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactNodeTypes.js": [
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/PooledClass.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/traverseAllChildren.js": [
      "./ReactCurrentOwner",
      "./ReactElement",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactPropTypeLocations.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.0.1/lib/DOMProperty.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/BeforeInputEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./FallbackCompositionState",
      "./SyntheticCompositionEvent",
      "./SyntheticInputEvent",
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.0.1/lib/ChangeEventPlugin.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./getEventTarget",
      "./isEventSupported",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@15.0.1/lib/DefaultEventPluginOrder.js": [
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.0.1/lib/EnterLeaveEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticMouseEvent",
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.0.1/lib/ReactDOMComponent.js": [
      "object-assign",
      "./AutoFocusUtils",
      "./CSSPropertyOperations",
      "./DOMLazyTree",
      "./DOMNamespaces",
      "./DOMProperty",
      "./DOMPropertyOperations",
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./ReactBrowserEventEmitter",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMButton",
      "./ReactDOMComponentFlags",
      "./ReactDOMComponentTree",
      "./ReactDOMInput",
      "./ReactDOMOption",
      "./ReactDOMSelect",
      "./ReactDOMTextarea",
      "./ReactMultiChild",
      "./ReactPerf",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./isEventSupported",
      "fbjs/lib/keyOf",
      "fbjs/lib/shallowEqual",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMTreeTraversal.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMTextComponent.js": [
      "object-assign",
      "./DOMChildrenOperations",
      "./DOMLazyTree",
      "./ReactDOMComponentTree",
      "./ReactPerf",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./validateDOMNesting",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDefaultBatchingStrategy.js": [
      "object-assign",
      "./ReactUpdates",
      "./Transaction",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react@15.0.1/lib/ReactEventListener.js": [
      "object-assign",
      "fbjs/lib/EventListener",
      "fbjs/lib/ExecutionEnvironment",
      "./PooledClass",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./getEventTarget",
      "fbjs/lib/getUnboundedScrollPosition",
      "process"
    ],
    "npm:react@15.0.1/lib/SelectEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactInputSelection",
      "./SyntheticEvent",
      "fbjs/lib/getActiveElement",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "fbjs/lib/shallowEqual"
    ],
    "npm:react@15.0.1/lib/SimpleEventPlugin.js": [
      "./EventConstants",
      "fbjs/lib/EventListener",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticAnimationEvent",
      "./SyntheticClipboardEvent",
      "./SyntheticEvent",
      "./SyntheticFocusEvent",
      "./SyntheticKeyboardEvent",
      "./SyntheticMouseEvent",
      "./SyntheticDragEvent",
      "./SyntheticTouchEvent",
      "./SyntheticTransitionEvent",
      "./SyntheticUIEvent",
      "./SyntheticWheelEvent",
      "fbjs/lib/emptyFunction",
      "./getEventCharCode",
      "fbjs/lib/invariant",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDefaultPerf.js": [
      "./DOMProperty",
      "./ReactDOMComponentTree",
      "./ReactDefaultPerfAnalysis",
      "./ReactMount",
      "./ReactPerf",
      "fbjs/lib/performanceNow",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactUpdateQueue.js": [
      "./ReactCurrentOwner",
      "./ReactInstanceMap",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/instantiateReactComponent.js": [
      "object-assign",
      "./ReactCompositeComponent",
      "./ReactEmptyComponent",
      "./ReactNativeComponent",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/setInnerHTML.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./createMicrosoftUnsafeLocalFunction",
      "process"
    ],
    "npm:react@15.0.1/lib/CallbackQueue.js": [
      "object-assign",
      "./PooledClass",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/Transaction.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:core-js@1.2.6/library/modules/$.an-object.js": [
      "./$.is-object"
    ],
    "npm:core-js@1.2.6/library/modules/$.iobject.js": [
      "./$.cof"
    ],
    "npm:core-js@1.2.6/library/modules/$.redefine.js": [
      "./$.hide"
    ],
    "npm:core-js@1.2.6/library/modules/$.hide.js": [
      "./$",
      "./$.property-desc",
      "./$.descriptors"
    ],
    "npm:core-js@1.2.6/library/modules/$.iter-create.js": [
      "./$",
      "./$.property-desc",
      "./$.set-to-string-tag",
      "./$.hide",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js": [
      "./$",
      "./$.has",
      "./$.wks"
    ],
    "npm:core-js@1.2.6/library/modules/$.wks.js": [
      "./$.shared",
      "./$.uid",
      "./$.global"
    ],
    "npm:core-js@1.2.6/library/modules/$.classof.js": [
      "./$.cof",
      "./$.wks"
    ],
    "npm:react-modal@1.1.1/lib/helpers/focusManager.js": [
      "./tabbable"
    ],
    "npm:react-modal@1.1.1/lib/helpers/scopeTab.js": [
      "./tabbable"
    ],
    "npm:react@15.0.1/lib/ReactEventEmitterMixin.js": [
      "./EventPluginHub"
    ],
    "npm:react@15.0.1/lib/SyntheticCompositionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.0.1/lib/SyntheticInputEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.0.1/lib/SyntheticMouseEvent.js": [
      "./SyntheticUIEvent",
      "./ViewportMetrics",
      "./getEventModifierState"
    ],
    "npm:react@15.0.1/lib/SyntheticAnimationEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.0.1/lib/SyntheticClipboardEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.0.1/lib/SyntheticFocusEvent.js": [
      "./SyntheticUIEvent"
    ],
    "npm:react@15.0.1/lib/SyntheticKeyboardEvent.js": [
      "./SyntheticUIEvent",
      "./getEventCharCode",
      "./getEventKey",
      "./getEventModifierState"
    ],
    "npm:react@15.0.1/lib/SyntheticDragEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@15.0.1/lib/SyntheticTouchEvent.js": [
      "./SyntheticUIEvent",
      "./getEventModifierState"
    ],
    "npm:react@15.0.1/lib/SyntheticUIEvent.js": [
      "./SyntheticEvent",
      "./getEventTarget"
    ],
    "npm:react@15.0.1/lib/SyntheticTransitionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.0.1/lib/SyntheticWheelEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@15.0.1/lib/FallbackCompositionState.js": [
      "object-assign",
      "./PooledClass",
      "./getTextContentAccessor"
    ],
    "npm:react@15.0.1/lib/ReactDefaultPerfAnalysis.js": [
      "object-assign"
    ],
    "npm:lodash.assign@3.2.0/index.js": [
      "lodash._baseassign",
      "lodash._createassigner",
      "lodash.keys"
    ],
    "npm:react@15.0.1/lib/DOMChildrenOperations.js": [
      "./DOMLazyTree",
      "./Danger",
      "./ReactMultiChildUpdateTypes",
      "./ReactPerf",
      "./createMicrosoftUnsafeLocalFunction",
      "./setInnerHTML",
      "./setTextContent",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMIDOperations.js": [
      "./DOMChildrenOperations",
      "./ReactDOMComponentTree",
      "./ReactPerf",
      "process"
    ],
    "npm:fbjs@0.8.0/lib/EventListener.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDebugTool.js": [
      "./ReactInvalidSetStateWarningDevTool",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/EventPluginHub.js": [
      "./EventPluginRegistry",
      "./EventPluginUtils",
      "./ReactErrorUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/EventPluginUtils.js": [
      "./EventConstants",
      "./ReactErrorUtils",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactComponentEnvironment.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactNativeComponent.js": [
      "object-assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/setTextContent.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./escapeTextContentForBrowser",
      "./setInnerHTML"
    ],
    "npm:react@15.0.1/lib/ReactInputSelection.js": [
      "./ReactDOMSelection",
      "fbjs/lib/containsNode",
      "fbjs/lib/focusNode",
      "fbjs/lib/getActiveElement"
    ],
    "npm:react@15.0.1/lib/ReactOwner.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/EventConstants.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.0.1/lib/EventPluginRegistry.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/getVendorPrefixedEventName.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.0.1/lib/isEventSupported.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.0.1/lib/validateDOMNesting.js": [
      "object-assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/EventPropagators.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/SyntheticEvent.js": [
      "object-assign",
      "./PooledClass",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/AutoFocusUtils.js": [
      "./ReactDOMComponentTree",
      "fbjs/lib/focusNode"
    ],
    "npm:react@15.0.1/lib/CSSPropertyOperations.js": [
      "./CSSProperty",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactPerf",
      "fbjs/lib/camelizeStyleName",
      "./dangerousStyleValue",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/memoizeStringOnly",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/DOMPropertyOperations.js": [
      "./DOMProperty",
      "./ReactDOMInstrumentation",
      "./ReactPerf",
      "./quoteAttributeValueForBrowser",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMInput.js": [
      "object-assign",
      "./DOMPropertyOperations",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMOption.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactDOMComponentTree",
      "./ReactDOMSelect",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMSelect.js": [
      "object-assign",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMTextarea.js": [
      "object-assign",
      "./DOMPropertyOperations",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactMultiChild.js": [
      "./ReactComponentEnvironment",
      "./ReactMultiChildUpdateTypes",
      "./ReactCurrentOwner",
      "./ReactReconciler",
      "./ReactChildReconciler",
      "./flattenChildren",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:fbjs@0.8.0/lib/performanceNow.js": [
      "./performance"
    ],
    "npm:react@15.0.1/lib/ReactCompositeComponent.js": [
      "object-assign",
      "./ReactComponentEnvironment",
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactErrorUtils",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactNodeTypes",
      "./ReactPerf",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:core-js@1.2.6/library/modules/$.descriptors.js": [
      "./$.fails"
    ],
    "npm:core-js@1.2.6/library/modules/$.shared.js": [
      "./$.global"
    ],
    "npm:react@15.0.1/lib/getEventKey.js": [
      "./getEventCharCode"
    ],
    "npm:lodash._baseassign@3.2.0.js": [
      "npm:lodash._baseassign@3.2.0/index"
    ],
    "npm:lodash._createassigner@3.1.1.js": [
      "npm:lodash._createassigner@3.1.1/index"
    ],
    "npm:lodash.keys@3.1.2.js": [
      "npm:lodash.keys@3.1.2/index"
    ],
    "npm:fbjs@0.8.0/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:fbjs@0.8.0/lib/camelizeStyleName.js": [
      "./camelize"
    ],
    "npm:fbjs@0.8.0/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:react@15.0.1/lib/ReactDOMInstrumentation.js": [
      "./ReactDOMDebugTool"
    ],
    "npm:react@15.0.1/lib/quoteAttributeValueForBrowser.js": [
      "./escapeTextContentForBrowser"
    ],
    "npm:react@15.0.1/lib/ReactErrorUtils.js": [
      "process"
    ],
    "npm:react@15.0.1/lib/getTextContentAccessor.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.0.1/lib/Danger.js": [
      "./DOMLazyTree",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/createNodesFromMarkup",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/getMarkupWrap",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactMultiChildUpdateTypes.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.0.1/lib/ReactInvalidSetStateWarningDevTool.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/accumulateInto.js": [
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMSelection.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./getNodeForCharacterOffset",
      "./getTextContentAccessor"
    ],
    "npm:react@15.0.1/lib/dangerousStyleValue.js": [
      "./CSSProperty",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/LinkedValueUtils.js": [
      "./ReactPropTypes",
      "./ReactPropTypeLocations",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactChildReconciler.js": [
      "./ReactReconciler",
      "./instantiateReactComponent",
      "./shouldUpdateReactComponent",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:fbjs@0.8.0/lib/performance.js": [
      "./ExecutionEnvironment"
    ],
    "npm:react@15.0.1/lib/flattenChildren.js": [
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:fbjs@0.8.0/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:lodash._createassigner@3.1.1/index.js": [
      "lodash._bindcallback",
      "lodash._isiterateecall",
      "lodash.restparam"
    ],
    "npm:lodash.keys@3.1.2/index.js": [
      "lodash._getnative",
      "lodash.isarguments",
      "lodash.isarray"
    ],
    "npm:lodash._baseassign@3.2.0/index.js": [
      "lodash._basecopy",
      "lodash.keys"
    ],
    "npm:fbjs@0.8.0/lib/createNodesFromMarkup.js": [
      "./ExecutionEnvironment",
      "./createArrayFromMixed",
      "./getMarkupWrap",
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.8.0/lib/getMarkupWrap.js": [
      "./ExecutionEnvironment",
      "./invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMDebugTool.js": [
      "./ReactDOMUnknownPropertyDevtool",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:lodash._bindcallback@3.0.1.js": [
      "npm:lodash._bindcallback@3.0.1/index"
    ],
    "npm:lodash._isiterateecall@3.0.9.js": [
      "npm:lodash._isiterateecall@3.0.9/index"
    ],
    "npm:lodash.restparam@3.6.1.js": [
      "npm:lodash.restparam@3.6.1/index"
    ],
    "npm:lodash._getnative@3.9.1.js": [
      "npm:lodash._getnative@3.9.1/index"
    ],
    "npm:lodash.isarguments@3.0.8.js": [
      "npm:lodash.isarguments@3.0.8/index"
    ],
    "npm:lodash.isarray@3.0.4.js": [
      "npm:lodash.isarray@3.0.4/index"
    ],
    "npm:lodash._basecopy@3.0.1.js": [
      "npm:lodash._basecopy@3.0.1/index"
    ],
    "npm:fbjs@0.8.0/lib/createArrayFromMixed.js": [
      "./invariant",
      "process"
    ],
    "npm:react@15.0.1/lib/ReactDOMUnknownPropertyDevtool.js": [
      "./DOMProperty",
      "./EventPluginRegistry",
      "fbjs/lib/warning",
      "process"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "capaj/systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.7",
    "core-js": "npm:core-js@1.2.6",
    "es6-promise": "npm:es6-promise@3.1.2",
    "fetch-ie8": "npm:fetch-ie8@1.4.2",
    "jquery": "npm:jquery@2.2.3",
    "moment": "npm:moment@2.12.0",
    "react": "npm:react@15.0.1",
    "react-dom": "npm:react-dom@15.0.1",
    "react-modal": "npm:react-modal@1.1.1",
    "react-uikit-alert": "npm:react-uikit-alert@0.2.3",
    "github:capaj/systemjs-hot-reloader@0.5.7": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.5",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-plugin-syntax-flow@6.5.0": {
      "babel-runtime": "npm:babel-runtime@5.8.38"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.2.3"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:cuid@1.3.8": {
      "browser-fingerprint": "npm:browser-fingerprint@0.0.1",
      "core-js": "npm:core-js@1.2.6",
      "node-fingerprint": "npm:node-fingerprint@0.0.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@6.2.3": {
      "bn.js": "npm:bn.js@4.11.3",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:es6-promise@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.8.0": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.5.0",
      "core-js": "npm:core-js@1.2.6",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-process-browser@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "falafel": "npm:falafel@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.6.5"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.5.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.11.0"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._createassigner@3.1.1": {
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.assign@3.2.0": {
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:node-fetch@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-fingerprint@0.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.5.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.3",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ramda@0.18.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@15.0.1": {
      "react": "npm:react@15.0.1"
    },
    "npm:react-modal@1.1.1": {
      "element-class": "npm:element-class@0.2.2",
      "exenv": "npm:exenv@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.0.1"
    },
    "npm:react-uikit-alert@0.2.3": {
      "react": "npm:react@0.14.8",
      "react-uikit-base": "npm:react-uikit-base@0.2.4",
      "ufunc": "npm:ufunc@0.2.1"
    },
    "npm:react-uikit-base@0.2.4": {
      "cuid": "npm:cuid@1.3.8",
      "react": "npm:react@0.14.8",
      "ufunc": "npm:ufunc@0.2.1"
    },
    "npm:react@0.14.8": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react@15.0.1": {
      "fbjs": "npm:fbjs@0.8.0",
      "loose-envify": "npm:loose-envify@1.1.0",
      "object-assign": "npm:object-assign@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.0.34": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "inline-process-browser": "npm:inline-process-browser@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:recast@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.16",
      "esprima": "npm:esprima@2.7.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.34",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ufunc@0.2.1": {
      "ramda": "npm:ramda@0.18.0"
    },
    "npm:unreachable-branch-transform@0.5.1": {
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
      "recast": "npm:recast@0.11.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
