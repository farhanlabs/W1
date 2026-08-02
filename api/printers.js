// api/printers.js - Secure Serverless API
const hpModels = [
    "HP DeskJet 2600 All-in-One Printer",
    "HP DeskJet 2632 All-in-One Printer",
    "HP DeskJet 2700 All-in-One Printer",
    "HP DeskJet 2755e All-in-One Printer",
    "HP DeskJet 3755 All-in-One Printer",
    "HP DeskJet 4155e All-in-One Printer",
    "HP DeskJet Ink Advantage 1115",
    "HP DeskJet Ink Advantage 2135",
    "HP DeskJet Ink Advantage 2335",
    "HP DeskJet Ink Advantage 2776",
    "HP DeskJet Ink Advantage 3775",
    "HP DeskJet Ink Advantage 4175",
    "HP DeskJet Ink Advantage 5075",
    "HP Smart Tank 500 All-in-One",
    "HP Smart Tank 515 Wireless All-in-One",
    "HP Smart Tank 530 Wireless All-in-One",
    "HP Smart Tank 580 All-in-One",
    "HP Smart Tank 615 Wireless All-in-One",
    "HP Smart Tank 720 All-in-One",
    "HP Smart Tank 750 All-in-One",
    "HP LaserJet Pro M126a Multi-function",
    "HP LaserJet Pro M126nw Wireless",
    "HP LaserJet Pro M1136 MFP",
    "HP LaserJet Pro M15a",
    "HP LaserJet Pro M15w Wireless",
    "HP LaserJet Pro M404dn",
    "HP LaserJet Pro MFP M227fdw",
    "HP LaserJet Pro MFP M428fdw",
    "HP LaserJet 1020 Plus",
    "HP LaserJet P1102w",
    "HP Neverstop Laser MFP 1200a",
    "HP Neverstop Laser MFP 1200w Wireless",
    "HP Neverstop Laser 1000a",
    "HP Neverstop Laser 1000w",
    "HP ENVY 6055e All-in-One Printer",
    "HP ENVY 6455e All-in-One Printer",
    "HP ENVY Pro 6455 All-in-One Printer",
    "HP ENVY 7855 All-in-One Printer",
    "HP OfficeJet Pro 6970 All-in-One",
    "HP OfficeJet Pro 8025e All-in-One",
    "HP OfficeJet Pro 9015e All-in-One",
    "HP OfficeJet Pro 9025e All-in-One",
    "HP OfficeJet 200 Mobile Printer",
    "HP OfficeJet 250 Mobile All-in-One"
];

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const search = (req.query.q || '').toLowerCase().trim();

    // SECURITY: Jab tak kam se kam 2 characters type na hon, koi list mat bhejo
    if (!search || search.length < 2) {
        return res.status(200).json([]);
    }

    // Sirf matching 5 items bhejo (Puri list kabhi nahi jayegi)
    const filtered = hpModels.filter(model => 
        model.toLowerCase().includes(search)
    ).slice(0, 5);

    res.status(200).json(filtered);
}