use miette::Diagnostic;
use once_cell::sync::Lazy;
use regex::Regex;
use schematic::{SchemaType, Schematic};
use serde::{de, Deserialize, Deserializer, Serialize};
use starbase_styles::{Style, Stylize};
use std::{borrow::Borrow, fmt, ops::Deref, str::FromStr};
use thiserror::Error;

pub static ID_CHARS: &str = r"[0-9A-Za-z/\._-]*";

// The @ is to support npm package scopes!
pub static ID_PATTERN: Lazy<Regex> =
    Lazy::new(|| Regex::new(format!("^([A-Za-z@_]{{1}}{})$", ID_CHARS).as_str()).unwrap());

// This is to clean and ID and remove unwanted characters
pub static ID_CLEAN: Lazy<Regex> = Lazy::new(|| Regex::new(r"[^0-9A-Za-z/\._-]+").unwrap());

#[derive(Error, Debug, Diagnostic)]
#[diagnostic(code(id::invalid_format))]
#[error("Invalid format for {}, may only contain alpha-numeric characters, dashes (-), slashes (/), underscores (_), and dots (.), and must start with an alpha character.", .0.style(Style::Id))]
pub struct IdError(String);

#[derive(Clone, Default, Eq, Hash, Ord, PartialEq, PartialOrd, Serialize)]
pub struct Id(String);

impl Id {
    pub fn new<S: AsRef<str>>(id: S) -> Result<Id, IdError> {
        let id = id.as_ref();

        if !ID_PATTERN.is_match(id) {
            return Err(IdError(id.to_owned()));
        }

        Ok(Self::raw(id))
    }

    pub fn clean<S: AsRef<str>>(id: S) -> Result<Id, IdError> {
        Id::new(ID_CLEAN.replace_all(id.as_ref(), "-"))
    }

    pub fn raw<S: AsRef<str>>(id: S) -> Id {
        Id(id.as_ref().to_owned())
    }

    pub fn as_str(&self) -> &str {
        &self.0
    }
}

impl fmt::Debug for Id {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl fmt::Display for Id {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl AsRef<str> for Id {
    fn as_ref(&self) -> &str {
        &self.0
    }
}

impl AsRef<String> for Id {
    fn as_ref(&self) -> &String {
        &self.0
    }
}

impl AsRef<Id> for Id {
    fn as_ref(&self) -> &Id {
        self
    }
}

impl Deref for Id {
    type Target = String;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl PartialEq<str> for Id {
    fn eq(&self, other: &str) -> bool {
        self.0 == other
    }
}

impl PartialEq<&str> for Id {
    fn eq(&self, other: &&str) -> bool {
        &self.0 == other
    }
}

impl PartialEq<String> for Id {
    fn eq(&self, other: &String) -> bool {
        &self.0 == other
    }
}

// Allows strings to be used for collection keys

impl Borrow<String> for Id {
    fn borrow(&self) -> &String {
        &self.0
    }
}

impl Borrow<str> for Id {
    fn borrow(&self) -> &str {
        &self.0
    }
}

// Parsing values

impl FromStr for Id {
    type Err = IdError;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        Id::new(s)
    }
}

impl<'de> Deserialize<'de> for Id {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        Id::new(String::deserialize(deserializer)?)
            .map_err(|error| de::Error::custom(error.to_string()))
    }
}

impl Schematic for Id {
    fn generate_schema() -> SchemaType {
        SchemaType::string()
    }
}

// This is only used by tests!

impl From<&str> for Id {
    fn from(s: &str) -> Self {
        Id::new(s).unwrap()
    }
}
