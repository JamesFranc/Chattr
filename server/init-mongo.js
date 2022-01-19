db.auth('root', 'root')

db = db.getSiblingDB('respondr')
db.chat.drop();

db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [
        {
            role: "readWrite",
            db: "respondrdb"
        }
    ]
})

db.chat.save({
    user: "Nemo",
    inbox: [],
    sent: []
})

db.chat.save({
    user: "Pierre",
    inbox: [],
    sent: []
})
