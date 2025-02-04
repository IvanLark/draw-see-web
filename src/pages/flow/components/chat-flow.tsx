import {Background, BackgroundVariant, ReactFlow} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
function ChatFlow () {
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges}>
        <Background variant={BackgroundVariant.Lines} size={10} />
      </ReactFlow>
    </div>
  );
}

export default ChatFlow;