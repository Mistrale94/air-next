const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "<HIDDEN BECAUSE SECURITY STUFF>"
);

export default function getTransparencyReport() {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base("Relatório de Transparência")
      .select({
        fields: ["Propósito", "Data", "Valor"],
        sort: [{ field: "Data", direction: "desc" }],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const id = record.getId();
            const purpose = record.get("Propósito");
            const date = record.get("Data");
            const value = record.get("Valor");

            if (!purpose || !date || !value) return;

            totalRecords.push({
              id,
              purpose,
              date,
              value,
            });
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(totalRecords);
        }
      );
  });
}