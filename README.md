🟠 Vouch
The GenZ Student Marketplace with Smart Escrow & Campus-Only Commerce

Vouch is a secure, campus-exclusive digital marketplace where students buy and sell essentials with confidence. The platform introduces a QR-based escrow release system, seller trust tiers, rewards economy, and an admin analytics dashboard — all wrapped in a clean, aesthetic, GenZ-coded UI.

🚀 Vision

Vouch solves a real student problem:

Unsafe peer-to-peer payments

Fake listings

No trust layer

No campus exclusivity

Vouch introduces:

✔ Secure held-payment escrow
✔ QR-based physical verification
✔ Seller trust tiers
✔ Rewards-based ecosystem
✔ Admin analytics dashboard
✔ UPI-integrated payment system

🧠 Core Concept: Smart Escrow with QR Validation

Instead of direct payment:

Buyer pays through UPI / Card

Vouch holds the money

A unique QR is generated

Seller scans QR during in-person exchange

If validated → Payment released (minus 5% commission)

This ensures:

No fake delivery claims

No payment fraud

Secure handover confirmation

Vouch platform overview:
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/1df7573a-f603-4581-9033-15248fb3f241" />


🏗 System Architecture Overview
 <img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/6c02823f-f5ab-4991-baf1-a8b3bd55834b" />

📊 Application Workflow Diagram

<<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/c8ba1d77-6c33-40ec-b50f-1d209fb93e8c" />




🔐 Escrow & QR Validation Logic
On Successful Payment:
    Generate Unique Transaction ID
    Generate Unique QR Code
    Save Transaction with Status = "Held"

On QR Scan:
    If QR matches transaction ID:
        Status → Completed
        Release Payment
        Deduct 5% Commission
    Else:
        Reject
👤 User Roles
1️⃣ Customer

Browse items

Buy products

View purchase history

Track payment status (Completed / Held / Failed)

Earn reward coins

2️⃣ Seller

List items

Track orders

Gain trust ratings

Scan QR to confirm delivery

Receive payment after validation

3️⃣ Admin

Login (Password: 12345)

View:

Timestamp logs

Location of login

Device/platform used

Payment method used

Payment status

Platform analytics dashboard

🏅 Seller Trust Tier System
Tier	Requirement
🥉 Bronze	New sellers
🥈 Silver	10+ successful sales
🥇 Gold	30+ successful sales
💎 Platinum	75+ successful sales + 4.5★ rating

Trust impacts:

Listing visibility

Buyer confidence

Ranking priority

🎁 Rewards Economy

Every transaction earns Vouch Coins.

Coins can be redeemed for:

Brand vouchers

Campus merchandise

Tech accessories

Gift cards

Rewards Redemption Flow
User Selects Reward
        │
        ▼
Confirm Redemption
        │
        ▼
Check Coin Balance
        │
        ├── Enough Coins → Deduct & Show Success Page
        │
        └── Not Enough → Error Prompt
📦 Purchase History Module

Each purchase shows:

Item Name

Unique Transaction ID

Payment Method

Payment Status:

Completed

Held

Failed

Held Duration (if applicable)

Example:

Item: Lab Coat
ID: VCH-839291
Status: Held
Held For: 1 day 4 hours
Payment Mode: GPay
📈 Admin Dashboard Architecture
Admin Login
    │
    ▼
Role Validation
    │
    ▼
Access Dashboard
    │
    ├── Login Logs Table
    ├── Platform Distribution Chart
    ├── Payment Mode Breakdown
    ├── Payment Status Insights
    └── Transaction Trends
Dashboard Includes

Login Timestamp

User Location

Device / OS

Payment Method Used

Payment Status

Example cases:

Completed

Failed

Held

📌 UML – Class Diagram
User
 ├── id
 ├── name
 ├── role
 ├── rewardCoins
 └── rating

Seller extends User
 ├── trustTier
 └── successfulSales

Listing
 ├── id
 ├── title
 ├── price
 ├── image
 └── sellerId

Transaction
 ├── id
 ├── buyerId
 ├── sellerId
 ├── listingId
 ├── paymentMethod
 ├── status
 ├── timestamp
 └── qrCode

Reward
 ├── id
 ├── name
 ├── coinCost
 └── image
🎯 Use Case Diagram (Text Representation)
Customer:
  - Register
  - Login
  - Browse Listings
  - Buy Item
  - Redeem Reward
  - View Purchases

Seller:
  - List Item
  - Scan QR
  - Receive Payment
  - Gain Rating

Admin:
  - Login
  - View Analytics
  - Monitor Transactions
  - Monitor Payment Status
🎨 UI/UX Philosophy

Inspired by modern minimal aesthetic platforms.

Design Language:

Serif Headlines

Clean Sans-Serif Body

Smooth Micro-interactions

Floating 3D Headline Animation

Warm neutral color palette

Minimal clutter

Large whitespace usage

🛠 Tech Stack
Layer	Technology
Frontend	NextJS + TypeScript
Styling	Tailwind CSS
Animations	CSS + Motion
Payments	UPI Simulation
Storage	Local Storage / DB
QR Engine	Dynamic QR Generator
Admin Analytics	Charts + Mock Data
🔁 Complete Transaction Lifecycle
Listing Created
        │
Buyer Pays
        │
Escrow Activated
        │
QR Generated
        │
Physical Exchange
        │
QR Verified
        │
Payment Released
        │
Commission Deducted (5%)
        │
Seller Tier Updated
        │
Coins Awarded
🔮 Future Scope

Real UPI API integration

AI fraud detection

College email verification

Blockchain escrow

NFT-based campus identity

Campus ambassador program

In-app chat

Delivery scheduling

🏁 Conclusion

Vouch is more than a marketplace.

It is:

A trust protocol for students

A smart escrow engine

A reward economy

A campus-only commerce layer

Built for GenZ.
Designed for security.
Engineered for scale.
