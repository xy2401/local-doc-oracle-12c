define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"List of Figures",
                    "href":"lof.html"
                },
                {
                    "title":"List of Tables",
                    "href":"lot.html"
                },
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-5BE85461-0D76-47BA-BC8C-A94BE489A0A1",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-65EEC36F-C191-4083-871A-81CF3095F0A4"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-14B66696-FE97-4B39-AFEA-D933CC038088"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-CC33321A-496E-4608-8CCD-B8526E712D13"
                        }
                    ]
                },
                {
                    "title":"1 Introduction to Oracle Database Gateway for ODBC",
                    "href":"database-gateway-for-odbc-introduction.html#GUID-01E50954-A8BD-400C-ACA9-7F6A7AD1BFD6",
                    "topics":[
                        {
                            "title":"1.1 Overview of Oracle Database Gateways",
                            "href":"database-gateway-for-odbc-introduction.html#GUID-7A466E0B-C47E-421B-837C-E6620F954034"
                        },
                        {
                            "title":"1.2 About Heterogeneous Services Technology",
                            "href":"database-gateway-for-odbc-introduction.html#GUID-5C7F468F-6BEF-41DD-A7B6-57450E5E88AF"
                        },
                        {
                            "title":"1.3 About Oracle Database Gateway for ODBC",
                            "href":"database-gateway-for-odbc-introduction.html#GUID-106CAD37-C98D-41AC-934A-606D044059D3"
                        },
                        {
                            "title":"1.4 Oracle Database Gateway for ODBC Architecture",
                            "href":"database-gateway-for-odbc-introduction.html#GUID-DDFB8985-CFB1-40BD-8372-595D94432659",
                            "topics":[
                                {
                                    "title":"1.4.1 Oracle and Non-Oracle Systems on Separate Machines",
                                    "href":"database-gateway-for-odbc-introduction.html#GUID-18EC723D-C856-4D8C-8D90-E6A180F50C4A"
                                },
                                {
                                    "title":"1.4.2 Oracle and Non-Oracle Systems on the Same Machine",
                                    "href":"database-gateway-for-odbc-introduction.html#GUID-110ACE35-83A8-4222-8F05-90342B099C3E"
                                }
                            ]
                        },
                        {
                            "title":"1.5 ODBC Connectivity Requirements",
                            "href":"database-gateway-for-odbc-introduction.html#GUID-C1ADB494-59EE-413A-A714-6E9C0110558D"
                        }
                    ]
                },
                {
                    "title":"2 Oracle Database Gateway for ODBC Features and Restrictions",
                    "href":"database-gateway-for-odbc-features.html#GUID-FD717A9F-05D9-42DD-BE65-18EDEF38789C",
                    "topics":[
                        {
                            "title":"2.1 Using the Pass-Through Feature",
                            "href":"database-gateway-for-odbc-features.html#GUID-0365FD91-AC7E-44F2-8FB7-FC100D006391"
                        },
                        {
                            "title":"2.2 Using AUTO COMMIT",
                            "href":"database-gateway-for-odbc-features.html#GUID-51F812D7-D7E1-4DAF-8209-14B995DB141A"
                        },
                        {
                            "title":"2.3 Known Restrictions",
                            "href":"database-gateway-for-odbc-features.html#GUID-5DC78E74-3A8E-4AC5-8291-2BB9B65301AA",
                            "topics":[
                                {
                                    "title":"2.3.1 COMMIT or ROLLBACK in PL/SQL Cursor Loops Closes Open Cursors",
                                    "href":"database-gateway-for-odbc-features.html#GUID-2580E06F-FE95-4C3E-9C83-550AFA914421"
                                },
                                {
                                    "title":"2.3.2 SQL Syntax Restrictions",
                                    "href":"database-gateway-for-odbc-features.html#GUID-F7CE5725-8B35-420A-8043-C94CBBFF5B22",
                                    "topics":[
                                        {
                                            "title":"2.3.2.1 WHERE CURRENT OF Clause",
                                            "href":"database-gateway-for-odbc-features.html#GUID-C0A80664-A583-4AED-B070-15ACA93DC7B9"
                                        },
                                        {
                                            "title":"2.3.2.2 CONNECT BY Clause",
                                            "href":"database-gateway-for-odbc-features.html#GUID-ADC2A2E6-7A4E-4DDB-92A4-03DDD426D003"
                                        },
                                        {
                                            "title":"2.3.2.3 ROWID",
                                            "href":"database-gateway-for-odbc-features.html#GUID-78E6E4AB-0625-47B0-8612-D92511D3ED49"
                                        },
                                        {
                                            "title":"2.3.2.4 EXPLAIN PLAN Statement",
                                            "href":"database-gateway-for-odbc-features.html#GUID-A8DC8FFE-CF21-4D49-B6F6-8BE01F843169"
                                        }
                                    ]
                                },
                                {
                                    "title":"2.3.3 CALLBACK Links Support",
                                    "href":"database-gateway-for-odbc-features.html#GUID-8F4FE79D-2935-41BC-9605-690925CAC252"
                                }
                            ]
                        },
                        {
                            "title":"2.4 Known Problems",
                            "href":"database-gateway-for-odbc-features.html#GUID-466725D9-F81E-419B-A10A-59F25EC99052",
                            "topics":[
                                {
                                    "title":"2.4.1 Encrypted Format Login",
                                    "href":"database-gateway-for-odbc-features.html#GUID-58F8CA4E-F62F-47D8-A53C-F1D8FF9E9733"
                                },
                                {
                                    "title":"2.4.2 Date Arithmetic",
                                    "href":"database-gateway-for-odbc-features.html#GUID-43650A70-FA6D-43D6-B723-C5A6600C27EF"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"A Data Type Conversion",
                    "href":"database-gateway-for-odbc-data-type-conversion.html#GUID-2185626B-7A3D-4AFA-877F-4CC4B72843A0"
                },
                {
                    "title":"B Supported SQL Syntax and Functions",
                    "href":"database-gateway-for-odbc-supported-syntax-fn.html#GUID-83701228-AE3C-4058-90B3-36A23CD4482B",
                    "topics":[
                        {
                            "title":"B.1 Supported SQL Statements",
                            "href":"database-gateway-for-odbc-supported-syntax-fn.html#GUID-8C7FE3F8-F652-4846-917E-78A4C7B8C948",
                            "topics":[
                                {
                                    "title":"B.1.1 DELETE",
                                    "href":"database-gateway-for-odbc-supported-syntax-fn.html#GUID-53DE3F57-D776-40BD-94C3-4DC4B1BE4499"
                                },
                                {
                                    "title":"B.1.2 INSERT",
                                    "href":"database-gateway-for-odbc-supported-syntax-fn.html#GUID-BEC752A6-465D-48BC-8354-13A717CC056E"
                                },
                                {
                                    "title":"B.1.3 SELECT",
                                    "href":"database-gateway-for-odbc-supported-syntax-fn.html#GUID-F94B83DE-DA02-4321-9592-C5D2FC8A14A8"
                                },
                                {
                                    "title":"B.1.4 UPDATE",
                                    "href":"database-gateway-for-odbc-supported-syntax-fn.html#GUID-0726C0D4-3B75-48A7-B172-AECFB9BA1B42"
                                }
                            ]
                        },
                        {
                            "title":"B.2 Oracle Functions",
                            "href":"database-gateway-for-odbc-supported-syntax-fn.html#GUID-FA9EEBCD-5503-4622-B806-E3BFBB2AF6BA"
                        }
                    ]
                },
                {
                    "title":"C Data Dictionary",
                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-62D5EEFD-886F-44FD-9F38-37183035A5DF",
                    "topics":[
                        {
                            "title":"C.1 Accessing the Non-Oracle Data Dictionary",
                            "href":"database-gateway-for-odbc-data-dictionary.html#GUID-D0F16AEB-EBF9-4B8B-B6A2-BCF18F8DE590"
                        },
                        {
                            "title":"C.2 Views and Tables Supported by Oracle Database Gateway for ODBC",
                            "href":"database-gateway-for-odbc-data-dictionary.html#GUID-F2102B7F-31A9-429D-A662-8B437619C839",
                            "topics":[
                                {
                                    "title":"C.2.1 Data Dictionary Mapping",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-0CF77B60-BC26-41A4-9F1C-95C15E583D59"
                                },
                                {
                                    "title":"C.2.2 ALL_CATALOG",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-F70DE8EF-3E65-4D70-AC1D-71C464ACAD32"
                                },
                                {
                                    "title":"C.2.3 ALL_COL_COMMENTS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-7CE99485-7A98-47CF-B212-ACF1D81130F2"
                                },
                                {
                                    "title":"C.2.4 ALL_CONS_COLUMNS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-FCEEE9DD-4BC1-43D4-A6D9-AD6E1E60C185"
                                },
                                {
                                    "title":"C.2.5 ALL_CONSTRAINTS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-EA2220DE-C634-422D-98EE-4385ED5298DE"
                                },
                                {
                                    "title":"C.2.6 ALL_IND_COLUMNS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-9C90233C-1CCD-4916-9597-C553CB30FE77"
                                },
                                {
                                    "title":"C.2.7 ALL_INDEXES",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-25A4A427-F12D-4566-A380-20F30572704E"
                                },
                                {
                                    "title":"C.2.8 ALL_OBJECTS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-FCCABCEF-80E3-422E-9B2A-7054927E6DAA"
                                },
                                {
                                    "title":"C.2.9 ALL_TAB_COLUMNS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-56F531A7-3A4D-471E-B450-233070CD54A4"
                                },
                                {
                                    "title":"C.2.10 ALL_TAB_COMMENTS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-52C27174-E121-4B7E-97E7-7E46D7838D1A"
                                },
                                {
                                    "title":"C.2.11 ALL_TABLES",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-23ABE14F-52E9-4BCF-8DCF-61AFFDEB7F9F"
                                },
                                {
                                    "title":"C.2.12 ALL_USERS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-4FC51E49-6656-4916-92C3-7A372CFE8E6A"
                                },
                                {
                                    "title":"C.2.13 ALL_VIEWS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-901DD99C-66B1-4585-8A34-6FD13A746CB2"
                                },
                                {
                                    "title":"C.2.14 DICTIONARY",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-B1154E3F-FB31-4D74-9FA2-82212274C77A"
                                },
                                {
                                    "title":"C.2.15 DICT_COLUMNS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-09B0063F-5CC5-4D3A-BD4C-D12859A201E4"
                                },
                                {
                                    "title":"C.2.16 USER_CATALOG",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-52600E79-A9E9-48AE-B623-E97D40DFD641"
                                },
                                {
                                    "title":"C.2.17 USER_COL_COMMENTS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-3FE6AF5B-5D22-47BC-B641-6EA66D2CCBF1"
                                },
                                {
                                    "title":"C.2.18 USER_CONS_COLUMNS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-63DB9EF6-2EEA-4210-907B-DDEA6B212C71"
                                },
                                {
                                    "title":"C.2.19 USER_CONSTRAINTS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-6002DBC3-F799-48D4-A0EC-7C2A0C308D84"
                                },
                                {
                                    "title":"C.2.20 USER_IND_COLUMNS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-E4007B88-9342-46CD-A46E-1B8D691C534E"
                                },
                                {
                                    "title":"C.2.21 USER_INDEXES",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-8E73E903-0A2F-4B8C-BAB5-5B234FEE9459"
                                },
                                {
                                    "title":"C.2.22 USER_OBJECTS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-90DED519-7690-4575-962B-A25C2ABBB17F"
                                },
                                {
                                    "title":"C.2.23 USER_TABCOLUMNS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-2356790F-8040-4B8C-97CF-E1CCF0AA893D"
                                },
                                {
                                    "title":"C.2.24 USER_TAB_COMMENTS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-813B74FD-1CEA-40B2-95F8-F181888EA7EF"
                                },
                                {
                                    "title":"C.2.25 USER_TABLES",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-B17621A3-14FC-4B8D-8FCC-387545E62167"
                                },
                                {
                                    "title":"C.2.26 USER_USERS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-377EF594-74DA-4798-8F29-9610C8B6080F"
                                },
                                {
                                    "title":"C.2.27 USER_VIEWS",
                                    "href":"database-gateway-for-odbc-data-dictionary.html#GUID-F5F5BF28-C17F-4DD2-8940-41B87F11CE1E"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"D Initialization Parameters",
                    "href":"database-gateway-for-odbc-init-param.html#GUID-6B54167C-16D7-407B-94E1-B5242F9CFB94",
                    "topics":[
                        {
                            "title":"D.1 Initialization Parameter File Syntax",
                            "href":"database-gateway-for-odbc-init-param.html#GUID-47547322-74C7-4F99-BB15-D7999A6D8A5B"
                        },
                        {
                            "title":"D.2 Oracle Database Gateway for ODBC Initialization Parameters",
                            "href":"database-gateway-for-odbc-init-param.html#GUID-91C9D84C-7B7D-483C-8A0A-4CADC17FC8DB",
                            "topics":[
                                {
                                    "title":"D.2.1 HS_DB_DOMAIN",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-46EF9F2F-A5DF-455B-B7E1-68F535005DB9"
                                },
                                {
                                    "title":"D.2.2 HS_DB_INTERNAL_NAME",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-6479EB3E-F71F-4840-BE9A-688FBCAE8EE6"
                                },
                                {
                                    "title":"D.2.3 HS_DB_NAME",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-183E57EA-344F-47DD-AD64-29AEED0FA2FF"
                                },
                                {
                                    "title":"D.2.4 HS_DESCRIBE_CACHE_HWM",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-164CE3C3-6A43-48C8-8336-BA8019803CE9"
                                },
                                {
                                    "title":"D.2.5 HS_LANGUAGE",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-F5C4F0D3-6AA3-4E3A-A70E-4791B1CEEC30",
                                    "topics":[
                                        {
                                            "title":"D.2.5.1 Language",
                                            "href":"database-gateway-for-odbc-init-param.html#GUID-596F9F11-16B4-4BF7-8EC4-B875C1C540B9",
                                            "topics":[
                                                {
                                                    "title":"D.2.5.1.1 Character Sets",
                                                    "href":"database-gateway-for-odbc-init-param.html#GUID-69CE7172-993F-49A7-B244-4F92E0C99A62"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"D.2.5.2 Territory",
                                            "href":"database-gateway-for-odbc-init-param.html#GUID-22BBEC11-EFD8-4979-B7AE-46E9B929733B"
                                        }
                                    ]
                                },
                                {
                                    "title":"D.2.6 HS_LONG_PIECE_TRANSFER_SIZE",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-4560C571-703A-47D9-B154-C1876265001A"
                                },
                                {
                                    "title":"D.2.7 HS_OPEN_CURSORS",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-973903C3-3A3A-4EB5-AC9D-4D50D2B1A870"
                                },
                                {
                                    "title":"D.2.8 HS_RPC_FETCH_REBLOCKING",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-0268756C-61BA-42EA-AD23-F9AF83D5C2A5"
                                },
                                {
                                    "title":"D.2.9 HS_RPC_FETCH_SIZE",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-7BBB7F8A-B298-4932-A169-C25916FCC173"
                                },
                                {
                                    "title":"D.2.10 HS_TIME_ZONE",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-3CB0AA1C-BAF5-4F1E-83F5-ABC4D4E13CAA"
                                },
                                {
                                    "title":"D.2.11 HS_TRANSACTION_MODEL",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-6F2ED705-2DC5-4A72-ABF2-B182A4B100DD"
                                },
                                {
                                    "title":"D.2.12 IFILE",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-12459C17-1BEE-4CE4-8915-C3E86E4BFD17"
                                },
                                {
                                    "title":"D.2.13 HS_FDS_TIMESTAMP_MAPPING",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-43E48846-5D04-4EF7-A709-027F544E5600"
                                },
                                {
                                    "title":"D.2.14 HS_FDS_DATE_MAPPING",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-019D694A-7AFF-4F95-9041-91E734EE61CB"
                                },
                                {
                                    "title":"D.2.15 HS_FDS_CONNECT_INFO",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-D4AEB7FD-D27A-4FB3-8B3F-6AEFC59ED827"
                                },
                                {
                                    "title":"D.2.16 HS_FDS_DEFAULT_OWNER",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-BABE39C5-3315-45FD-8855-FE96B9766498"
                                },
                                {
                                    "title":"D.2.17 HS_FDS_TRACE_LEVEL",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-32515C01-AA94-48E4-AA0B-707E717ADDA3"
                                },
                                {
                                    "title":"D.2.18 HS_FDS_SHAREABLE_NAME",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-DD33F5C0-32CC-43BD-ACA3-1DDF903FF978"
                                },
                                {
                                    "title":"D.2.19 HS_FDS_FETCH_ROWS",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-1E03BE6D-1CCD-4E2A-86B4-B92786B95D41"
                                },
                                {
                                    "title":"D.2.20 HS_FDS_REMOTE_DB_CHARSET",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-766FFAE9-079A-44B7-94FA-4AC1CD899AB3"
                                },
                                {
                                    "title":"D.2.21 HS_FDS_SQLLEN_INTERPRETATION",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-3A3A43DA-0EC3-411A-9A21-26A462D51648"
                                },
                                {
                                    "title":"D.2.22 HS_FDS_REPORT_REAL_AS_DOUBLE",
                                    "href":"database-gateway-for-odbc-init-param.html#GUID-A46BBB9E-23FA-4183-BCFA-42279EE67BAA"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Index",
                    "href":"book-index.html"
                }
            ]
        }
    ]
});