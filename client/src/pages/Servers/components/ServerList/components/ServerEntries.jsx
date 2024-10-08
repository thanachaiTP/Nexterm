import ServerObject from "@/pages/Servers/components/ServerList/components/ServerObject";
import CollapsibleFolder from "./CollapsibleFolder.jsx";
import PVEObject from "@/pages/Servers/components/ServerList/components/PVEObject/index.js";

const ServerEntries = ({ entries, nestedLevel, setRenameStateId, connectToServer, connectToPVEServer }) => {
    return (
        <>
            {entries.map(entry => {
                if (entry.type === "folder") {
                    return (
                        <CollapsibleFolder
                            id={entry.id}
                            key={"f"+entry.id}
                            name={entry.name}
                            entries={entry.entries}
                            renameState={entry.renameState}
                            setRenameStateId={setRenameStateId}
                            nestedLevel={nestedLevel}
                            connectToServer={connectToServer}
                            connectToPVEServer={connectToPVEServer}
                        />
                    );
                } else if (entry.type === "server") {
                    return (
                        <ServerObject
                            id={entry.id}
                            key={"s"+entry.id}
                            name={entry.name}
                            nestedLevel={nestedLevel}
                            icon={entry.icon}
                            connectToServer={connectToServer}
                        />
                    );
                } else if (entry.type === "pve-server") {
                    return (
                        <PVEObject name={entry.name} nestedLevel={nestedLevel} key={"pve"+entry.id} online={entry.online}
                                   id={entry.id} entries={entry.entries} connectToPVEServer={connectToPVEServer} />
                    );
                }
                return null;
            })}
        </>
    );
};

export default ServerEntries;