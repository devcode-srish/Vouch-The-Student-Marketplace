# 🛍️ Vouch – The Student Marketplace (Powered by Algorand)

> A secure, campus-focused peer-to-peer marketplace with escrow protection and QR-based handoff verification — powered by the Algorand blockchain.

Live Demo Link: https://9000-firebase-studio-1770477116255.cluster-aic6jbiihrhmyrqafasatvzbwe.cloudworkstations.dev 

---

# 📌 Overview

**Vouch** is a student-only digital marketplace designed to eliminate fraud in campus buying and selling.

Unlike traditional marketplaces, Vouch uses:

* 🔐 Blockchain-backed escrow (Algorand)
* 📱 QR-based physical exchange validation
* ⭐ Trust score & reputation system
* 🏆 Reward economy for active users
* 📊 Admin monitoring & analytics dashboard

The goal is simple:

> No scams. No fake payments. No unsafe exchanges.

---

# 🚀 Core Features

## 1️⃣ Secure Escrow System (Algorand-Based)

Funds are locked in a smart escrow wallet until both buyer and seller confirm the exchange.

✔ Buyer pays → Funds locked on Algorand
✔ QR generated for transaction
✔ Seller scans QR during meetup
✔ Funds released automatically

---

## 2️⃣ QR-Based Transaction Validation

Every transaction generates a unique QR containing:

* Transaction ID
* Escrow reference
* Buyer ID
* Seller ID
* Timestamp

This ensures physical exchange verification before fund release.

---

## 3️⃣ Trust & Reputation Engine

Users earn trust points based on:

* Successful transactions
* Positive ratings
* Account age
* Dispute-free history

Higher trust = Higher visibility.

---

## 4️⃣ Reward Economy

Users earn platform credits for:

* Completing transactions
* Referring students
* Maintaining high trust

Credits can be used for:

* Promoted listings
* Fee discounts

---

## 5️⃣ Admin Dashboard

Admins can:

* Monitor transactions
* View dispute logs
* Track user activity
* Freeze suspicious accounts

---

# 🏗️ System Architecture

```mermaid
flowchart LR
    A[User - Buyer] --> B[Frontend - Next.js]
    C[User - Seller] --> B
    B --> D[Backend APIs]
    D --> E[Escrow Smart Contract]
    E --> F[Algorand Blockchain]
    D --> G[Database]
    D --> H[QR Generator Service]
```

---

# 🔄 Complete Transaction Flow

```mermaid
sequenceDiagram
    participant Buyer
    participant Frontend
    participant Backend
    participant Escrow
    participant Seller

    Buyer->>Frontend: Select item & Pay
    Frontend->>Backend: Create transaction
    Backend->>Escrow: Lock funds (Algorand)
    Escrow-->>Backend: Escrow ID
    Backend-->>Frontend: Generate QR
    Buyer->>Seller: Meet physically
    Seller->>Frontend: Scan QR
    Frontend->>Backend: Validate QR
    Backend->>Escrow: Release funds
    Escrow-->>Seller: Transfer payment
```

---

# 💰 Escrow Logic Flowchart

```mermaid
flowchart TD
    A[Buyer Initiates Purchase] --> B[Payment Sent to Escrow]
    B --> C[Escrow Confirms Lock]
    C --> D[Generate Unique QR Code]
    D --> E[Physical Meetup]
    E --> F{QR Valid?}
    F -- Yes --> G[Release Funds to Seller]
    F -- No --> H[Transaction Blocked]
```

---

# 🧠 Trust Score Calculation Model

```mermaid
flowchart LR
    A[Successful Transactions] --> D[Trust Engine]
    B[Positive Ratings] --> D
    C[Account Age] --> D
    E[Disputes] --> D
    D --> F[Final Trust Score]
```

---

# 🗂️ Project Structure

```
Vouch/
│
├── src/
│   ├── components/      # UI Components
│   ├── pages/           # Application Routes
│   ├── api/             # Backend API Routes
│   ├── services/        # Escrow + Blockchain Logic
│   └── utils/           # Helper functions
│
├── docs/                # Diagrams & documentation
├── public/              # Static assets
├── package.json
└── next.config.ts
```

---

# 🔐 Why Algorand?

Algorand provides:

* ⚡ High-speed finality (~4 seconds)
* 💸 Extremely low transaction fees
* 🔒 Secure smart contracts
* 🌍 Energy-efficient blockchain

This makes it ideal for micro-transactions in a student economy.

---

# ⚙️ Tech Stack

| Layer      | Technology           |
| ---------- | -------------------- |
| Frontend   | Next.js + TypeScript |
| Styling    | Tailwind CSS         |
| Backend    | API Routes           |
| Blockchain | Algorand             |
| Database   | Firestore / NoSQL    |
| QR System  | Dynamic QR Generator |

---

# 🛡️ Security Model

✔ Escrow-based smart contract logic
✔ QR validation before release
✔ Server-side transaction verification
✔ Admin monitoring
✔ Dispute handling system

---

# 📈 Scalability Design

The system supports scaling by:

* Stateless backend APIs
* Blockchain-based payment handling
* Cloud-hosted database
* Modular microservice-ready structure

---

# 🔮 Future Enhancements

* 📱 Mobile app version
* 🧾 On-chain transaction history viewer
* 🧠 AI fraud detection engine
* 🎓 University email verification integration
* 💳 Native Algorand wallet integration

---

# 🎯 Problem Solved

Campus marketplaces often suffer from:

❌ Fake UPI screenshots
❌ Non-payment after handoff
❌ Anonymous scammers

Vouch eliminates these through blockchain-backed escrow and QR confirmation.

---

# 🏁 Conclusion

Vouch is not just a marketplace.

It is a **trust infrastructure for student commerce**, built on the reliability of Algorand and modern full-stack architecture.

---

# 📜 License

MIT License

---

# 💡 Built For

Hackathons • Campus Deployments • Web3 Innovation • Secure Peer Commerce

---

If you like this project, consider ⭐ starri
