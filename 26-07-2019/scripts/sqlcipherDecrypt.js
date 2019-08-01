Java.choose("net.sqlcipher.database.SQLiteDatabase",{
  onMatch: function(ins){
    var path_parts = ins.getPath().split("/");
    var db_name = path_parts[(path_parts.length -1)].split(".")[0]
    console.log("DB Name: "+ db_name)
    var rnd_db_name = db_name + "_" +random_name(5);
    var sql1 = String.$new("ATTACH DATABASE '/data/user/0/com.test.production/databases/"+rnd_db_name+".sql.plaintext' as "+rnd_db_name+" KEY '';");
    var sql2 = String.$new("SELECT sqlcipher_export('"+rnd_db_name+"');");
    var sql3 = String.$new("DETACH DATABASE "+rnd_db_name);
    ins.rawExecSQL(sql1);
    ins.rawExecSQL(sql2);
    ins.rawExecSQL(sql3);
    console.log("Found SqlCipherDatabaseProvider instance");
  },
  onComplete: function(ins){}
});