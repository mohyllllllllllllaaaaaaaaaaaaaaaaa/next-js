import StatusLabel, {Status} from "@/app/components/activ-label";
import AddCompanyButton from "@/app/components/add-company-button";
import ServerComponent from "@/app/components/server-component";
import ClientComponent from "@/app/components/client-component";
import ServerComponentCopy from "@/app/components/server-component-copy";

export default function Home() {
    return (
        <main >
        <h1 className="text-xl"> Home Page</h1>
        <StatusLabel status={Status.Active}> Active</StatusLabel>
            <StatusLabel status={Status.NotActive}> NotActive</StatusLabel>
            <StatusLabel status={Status.Pending}> Pending</StatusLabel>
            <StatusLabel status={Status.Suspended}> Suspended</StatusLabel>

            <AddCompanyButton/>
            <ServerComponent/>
            <ClientComponent>
                <ServerComponentCopy/>
            </ClientComponent>
        </main>
    );
};
