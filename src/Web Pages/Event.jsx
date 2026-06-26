function Events_D365() {
  return (
    <>
      {/* 1 */}
      <h3 class="mb-5 text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">In Dynamics 365 Model-Driven Apps / CRM Forms, the most commonly used form events are:</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">

          <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
            <tr>
              <th scope="col" className="px-6 py-3.5 font-semibold uppercase tracking-wider text-xs">Event</th>
              <th scope="col" className="px-6 py-3.5 font-semibold uppercase tracking-wider text-xs">Scope</th>
              <th scope="col" className="px-6 py-3.5 font-semibold uppercase tracking-wider text-xs">When it fires</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 bg-white">

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">OnLoad</td>
              <td className="px-6 py-3.5 text-slate-600">Form</td>
              <td className="px-6 py-3.5 text-slate-600">When the form opens or loads.</td>
            </tr>

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">OnSave</td>
              <td className="px-6 py-3.5 text-slate-600">Form</td>
              <td className="px-6 py-3.5 text-slate-600">Before a record is saved.</td>
            </tr>

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">OnPostSave</td>
              <td className="px-6 py-3.5 text-slate-600">Form</td>
              <td className="px-6 py-3.5 text-slate-600">After a successful save operation.</td>
            </tr>

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">OnChange</td>
              <td className="px-6 py-3.5 text-slate-600">Field</td>
              <td className="px-6 py-3.5 text-slate-600">When a field value changes and loses focus.</td>
            </tr>

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">TabStateChange</td>
              <td className="px-6 py-3.5 text-slate-600">Tab</td>
              <td className="px-6 py-3.5 text-slate-600">When a tab is expanded or collapsed.</td>
            </tr>

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">Data OnLoad</td>
              <td className="px-6 py-3.5 text-slate-600">Data</td>
              <td className="px-6 py-3.5 text-slate-600">Fires when form data is refreshed or reloaded.</td>
            </tr>

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">Business Process Flow Events</td>
              <td className="px-6 py-3.5 text-slate-600">BPF</td>
              <td className="px-6 py-3.5 text-slate-600">Stage change, stage selected, process status change.</td>
            </tr>

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">Lookup PreSearch</td>
              <td className="px-6 py-3.5 text-slate-600">Lookup Field</td>
              <td className="px-6 py-3.5 text-slate-600">Before lookup search executes.</td>
            </tr>

            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-medium text-slate-800">Command Bar / Ribbon Events</td>
              <td className="px-6 py-3.5 text-slate-600">Button</td>
              <td className="px-6 py-3.5 text-slate-600">When a custom button is clicked.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2 */}
      
      {/* 3 */}
      <div className="max-w-7xl p-6 space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Dynamics 365 CE Form Events
          </h1>
          <p className="text-slate-600 mt-2">
            Complete List of Events with Scenarios and Code Examples
          </p>
        </div>

        {/* OnLoad */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            1. Form OnLoad
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Hide Credit Limit field when Customer Type is Individual.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function onLoad(executionContext) {
    var formContext = executionContext.getFormContext();

    var customerType = formContext.getAttribute("customertypecode").getValue();

    if(customerType === 1){
        formContext.getControl("creditlimit").setVisible(false);
    }
}`}
            </pre>
          </div>
        </div>

        {/* OnSave */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            2. Form OnSave
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Prevent save if Budget Amount is negative.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function onSave(executionContext){

    var formContext = executionContext.getFormContext();

    var budget =
        formContext.getAttribute("budgetamount").getValue();

    if(budget < 0){

        executionContext
            .getEventArgs()
            .preventDefault();

        Xrm.Navigation.openAlertDialog({
            text:"Budget cannot be negative"
        });
    }
}`}
            </pre>
          </div>
        </div>

        {/* OnPostSave */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            3. Form OnPostSave
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Get Record ID after first save.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function onLoad(executionContext){

    var formContext = executionContext.getFormContext();

    formContext.data.entity.addOnPostSave(postSaveHandler);
}

function postSaveHandler(executionContext){

    var formContext = executionContext.getFormContext();

    var id = formContext.data.entity.getId();

    console.log(id);
}`}
            </pre>
          </div>
        </div>

        {/* OnChange */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. Field OnChange
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Calculate Total Amount automatically.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function calculateTotal(executionContext){

    var formContext = executionContext.getFormContext();

    var qty = formContext.getAttribute("new_quantity").getValue();

    var price = formContext.getAttribute("new_price").getValue();

    formContext.getAttribute("new_total").setValue(qty * price);
}`}
            </pre>
          </div>
        </div>

        {/* TabStateChange */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            5. Tab State Change
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Load data only when tab expands.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function tabChange(executionContext){

    var tab = executionContext.getEventSource();

    if(tab.getDisplayState() === "expanded"){
        console.log("Tab Expanded");
    }
}`}
            </pre>
          </div>
        </div>

        {/* Data OnLoad */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            6. Data OnLoad
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Execute logic whenever form data refreshes.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function onLoad(executionContext){

    var formContext = executionContext.getFormContext();

    formContext.data.addOnLoad(dataLoad);
}

function dataLoad(){
    console.log("Data Refreshed");
}`}
            </pre>
          </div>
        </div>

        {/* PreSearch */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            7. Lookup PreSearch
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Show only Active Accounts.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function filterAccounts(executionContext){

    var formContext =
        executionContext.getFormContext();

    var filter =
    "<filter>" +
        "<condition attribute='statecode' operator='eq' value='0' />" +
    "</filter>";

    formContext.getControl("parentaccountid")
               .addCustomFilter(filter);
}`}
            </pre>
          </div>
        </div>

        {/* Subgrid */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            8. Subgrid OnLoad
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Run logic whenever subgrid refreshes.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function subgridLoad(){
    console.log("Subgrid Loaded");
}`}
            </pre>
          </div>
        </div>

        {/* BPF Stage Change */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            9. BPF Stage Change
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Notify user when process stage changes.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function stageChange(executionContext){

    var stage =
        executionContext
        .getEventSource()
        .getActiveStage();

    console.log(stage.getName());
}`}
            </pre>
          </div>
        </div>

        {/* Pre Stage Change */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            10. BPF Pre Stage Change
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Prevent stage movement.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function preStageChange(executionContext){

    executionContext
        .getEventArgs()
        .preventDefault();
}`}
            </pre>
          </div>
        </div>

        {/* Stage Selected */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            11. BPF Stage Selected
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Display selected stage information.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function stageSelected(executionContext){

    var stage =
        executionContext
            .getEventArgs()
            .getStage();

    console.log(stage.getName());
}`}
            </pre>
          </div>
        </div>

        {/* Ribbon */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-3">
            12. Ribbon Button Click
          </h2>

          <p className="mb-4">
            <span className="font-semibold">Scenario:</span> Create Task from custom ribbon button.
          </p>

          <div className="bg-slate-100 rounded-lg p-4 overflow-auto">
            <pre>
              {`function createTask(primaryControl){

    var formContext = primaryControl;

    var accountName =
        formContext.getAttribute("name").getValue();

    Xrm.Navigation.openAlertDialog({
        text:"Task Created for " + accountName
    });
}`}
            </pre>
          </div>
        </div>

      </div>
    </>
  )
}

export default Events_D365;